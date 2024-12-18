<template>
    <div>
        <div id="VkIdSdkOneTap"></div>
        <br/>
        <my-section v-if='userData' class='friends'>
            <ul class='friends__list'>
                <li class='friends__item'>
                    <span class='friends__id rotate'>{{ userData.user_id }}</span>
                    <div class='friends__container'>
                        <img class='friends__image' :src='userData.avatar' alt="imag">
                        <div class='friends__full-name-block'>
                            <span class='friends__first-name' >
                                {{ userData.first_name }}
                            </span>
                            <span class='friends__last-name'>
                                {{userData.last_name}}
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
    </div>
</template>

<style lang="css" scoped>
.friends {
    flex-direction: row;
    position: relative;
}

.friends__list {
    width: 100%;
    display: flex;
    margin: 0;
    padding: 0;
}

.friends__item {
    width: 100%;
    display: flex;
    flex-direction: row;
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


<script>
import axios from 'axios';
import * as VKID from '@vkid/sdk';


    export default {
        name: 'VkPage',
        data () {
            return {
                client_Id: 52858991,
                userData: ''
            }
        },
        mounted () {
            VKID.Config.set({
                app: 52858991, 
                redirectUrl: `http://localhost/page-vk`,
                scope: 'email phone',
                responseMode: VKID.ConfigResponseMode.Callback,
            })
            const oneTap = new VKID.OneTap();
            const container = document.getElementById('VkIdSdkOneTap');

            if (container) {
            // Отрисовка кнопки в контейнере с именем приложения APP_NAME, светлой темой и на русском языке.
                oneTap.render({ container: container, scheme: VKID.Scheme.LIGHT, lang: VKID.Languages.RUS })
                .on(VKID.WidgetEvents.ERROR, e => console.log(e))
                .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS,  (payload) => {
                    console.log(payload)
                    const code = payload.code;
                    const deviceId = payload.device_id;
                    VKID.Auth.exchangeCode(code, deviceId)
                    .then(data => {
                        if (data && data.access_token) {
                            const accessToken =data.access_token;
                            const idToken = data.id_token;
                            VKID.Auth.userInfo(accessToken)
                                .then((response) => {
                                    this.userData = response.user;
                                    console.log(this.userData);
                                })
                                .catch(e => console.log(e))
                        } else {
                            console.error('Неожиданные данные', data);
                        }
                    })
                    .catch(e => console.log(e));
                });
            }
        }
    }
</script>
