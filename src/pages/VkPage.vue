<template>
    <div>
        <my-button @click='logout' class='del'>выйти</my-button>
        <div v-if='!isAuth' id="VkIdSdkOneTap"></div>
        <profile-vk v-if='isAuth' :href='userData.avatar' :userId='userData.user_id' :last_name='userData.last_name' :first_name='userData.first_name '></profile-vk>
        <list-friends-vk v-if='!isFriendsLoading && isAuth' :friends='friendsUser'></list-friends-vk>
        <my-loader v-else-if="isFriendsLoading"></my-loader>
    </div>
</template>

<script>
import axios from 'axios';
import * as VKID from '@vkid/sdk';
import { jsonp } from 'vue-jsonp';
import ProfileVk from '../components/ProfileVk.vue';
import ListFriendsVk from '@/components/ListFriendsVk.vue';


    export default {
        name: 'VkPage',
        components: {
            ProfileVk, ListFriendsVk
        },
        data () {
            return {
                isAuth: false,
                client_Id: 52858991,
                userData: '',
                isFriendsLoading: false,
                accessToken: '',
                idToken: '',
                friendsUser: [],
                fields: 'photo_200_orig',
                vkidVersion: 5.199,
            }
        },
        methods: {
            logout () {
                VKID.Auth.logout(this.accessToken)
                    .then((data) => {
                        if(data.response == 1) {
                            this.isAuth = false;
                            this.accessToken = '',
                            this.idToken = '',
                            this.userData = ''
                        }
                    })
                    .catch(e => console.log('logout тут такая сякая ошибка' + e));
            },
            getUser (response) {
                this.userData = response.user;
                this.isAuth = true;
                this.ViewFriends();
            },
            receivingAccess (data) {
                if (data && data.access_token) {
                    this.accessToken =data.access_token;
                    this.idToken = data.id_token;
                    VKID.Auth.userInfo(this.accessToken)
                        .then(this.getUser)
                        .catch(e => console.log(e))
                } else {
                    console.error('Неожиданные данные', data);
                }
            },
            async ViewFriends () {
                this.isFriendsLoading = true;
                try {
                    const result = await jsonp('https://api.vk.com/method/friends.get', {
                        access_token: this.accessToken,
                        user_ids: this.userData.user_id,
                        v: this.vkidVersion,
                        fields: this.fields,
                    })
                        this.friendsUser = result.response.items;
                } catch(e) {
                    console.log(e)
                }
                this.isFriendsLoading = false;
            }
        },
        mounted () {
            VKID.Config.set({
                app: 52858991, 
                redirectUrl: (window.location.host === 'localhost') ? `http://localhost/page-vk` : 'https://spirridonovka-pet-project.ru/',
                responseMode: VKID.ConfigResponseMode.Callback,
            })
            const oneTap = new VKID.OneTap();
            const container = document.getElementById('VkIdSdkOneTap');

            if (container) {
            oneTap.render({ container: container, scheme: VKID.Scheme.DARK, lang: VKID.Languages.RUS })
                .on(VKID.WidgetEvents.ERROR, e => console.log(e))
                .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS,  (payload) => {
                    console.log(payload)
                    const code = payload.code;
                    const deviceId = payload.device_id;
                    VKID.Auth.exchangeCode(code, deviceId)
                    .then(this.receivingAccess)
                    .catch(e => console.log(e));
                });
            }
        }
    }
</script>

<style lang="css" scoped>


</style>
