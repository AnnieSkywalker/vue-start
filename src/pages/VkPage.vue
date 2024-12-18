<template>
    <div>
        <div id="VkIdSdkOneTap"></div>

        <br/>
        <my-input></my-input>
        <section class='friends' Block Friends>
            <ul class='friends__list'>
                <li class='friends__item'>
                    <div class='friends__container'>
                        <img src="/" alt="imag">
                        <div class='friends__full-name-block'>
                            <span class='friends__first-name' >
                                Спиридонов
                            </span>
                            <span class='friends__second-name'>
                                Андрей
                            </span>
                        </div>
                    </div>
                </li>
            </ul>

        </section>

    </div>
</template>

<script>
import axios from 'axios';
import * as VKID from '@vkid/sdk';

    export default {
        name: 'VkPage',
        data () {
            return {
                client_Id: 52858991,
            }
        },
        mounted () {
            VKID.Config.set({
                app: 52858991, 
                redirectUrl: `http://localhost:8080/page-vk`,
                state: `dj29fnsadjsd82...` ,
                action: { 
                    name: `qr_auth`, 
                },
            })

            // Создание экземпляра кнопки.
            const oneTap = new VKID.OneTap();

            // Получение контейнера из разметки.
            const container = document.getElementById('VkIdSdkOneTap');

            // Проверка наличия кнопки в разметке.
            if (container) {
            // Отрисовка кнопки в контейнере с именем приложения APP_NAME, светлой темой и на русском языке.
            oneTap.render({ container: container, scheme: VKID.Scheme.LIGHT, lang: VKID.Languages.RUS })
                    .on(VKID.WidgetEvents.ERROR, handleError); // handleError — какой-либо обработчик ошибки.
            }
        }
    }
</script>

<style lang="css" scoped>

</style>