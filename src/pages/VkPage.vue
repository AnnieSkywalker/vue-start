<template>
    <div>
        <my-button @click='logout' class='del'>выйти</my-button>
        <div v-if='!isAuth' id="VkIdSdkOneTap"></div>
        
        <br/>
        <profile-vk v-if='isAuth' :href='userData.avatar' :userId='userData.user_id' :last_name='userData.last_name' :first_name='userData.first_name '></profile-vk>
        
        <my-section v-if='!isFriendsLoading' class='friends'>
            <ul class='friends__list'>
                <li v-for='user in friendsUser' class='friends__item'>
                    <span class='friends__id rotate'>{{ user.user_id }}</span>
                    <div class='friends__container'>
                        <img class='friends__image' :src='user.photo_200_orig' alt="imag">
                        <div class='friends__full-name-block'>
                            <span class='friends__first-name' >
                                {{ user.first_name }}
                            </span>
                            <span class='fravatariends__last-name'>
                                {{user.last_name}}
                            </span>
                        </div>
                        <div class='friends__button'>
                            <my-button class='open'>добавить</my-button>
                            <my-button class='del'>удалить</my-button>
                        </div>
                    </div>
                </li>
            </ul>
        </my-section>
        <my-loader v-else-if="isFriendsLoading"></my-loader>
    </div>
</template>

<script>
import axios from 'axios';
import * as VKID from '@vkid/sdk';
import { jsonp } from 'vue-jsonp'
import ProfileVk from '../components/ProfileVk.vue'

    export default {
        name: 'VkPage',
        components: {
            ProfileVk
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
                console.log(response)
                this.userData = response.user;
                this.isAuth = true;
                console.log(this.userData);
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
                        console.log(result)
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
.friends {
    flex-direction: row;
    position: relative;
}

.friends__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0;
    padding: 0;
}

.friends__item {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid var(--border-color);
    cursor: pointer;
}

.friends__item:hover {
    opacity: 0.6;
}

.friends__id {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 5px 0 5px;
    font-size: 8px;
    color: var(--text)
}

.friends__container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.friends__image {
    background-color: transparent;
    border: none;
    border-radius: 50%;
    height: 50px;
    margin: 0 30px 0 0;
    padding: 0;
    width: 50px;
}

.friends__full-name-block {
    display: flex;
    flex-direction: row;

}

.friends__first-name {
    display: block;
    font-size: 15px;
    color: var(--text)
}

.friends__last-name {
    display: block;
    font-size: 15px;
    color: var(--text)
}

.friends__button {
    width: 300px;
    display: flex;
    flex-direction: row;
    gap:5px
}

</style>
