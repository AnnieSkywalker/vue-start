<template>
    <div>
        <div
            v-if="!isAuth"
            id="VkIdSdkOneTap"
        ></div>
    </div>
</template>

<script>
    import * as VKID from '@vkid/sdk';
    export default {
        name: 'Login',
        mounted() {
            VKID.Config.set({
                app: 52858991,
                redirectUrl: window.location.host === 'localhost' ? `http://localhost/page-vk` : 'https://spirridonovka-pet-project.ru/',
                responseMode: VKID.ConfigResponseMode.Callback,
            });
            const oneTap = new VKID.OneTap();
            const container = document.getElementById('VkIdSdkOneTap');

            if (container) {
                oneTap
                    .render({ container: container, scheme: VKID.Scheme.DARK, lang: VKID.Languages.RUS })
                    .on(VKID.WidgetEvents.ERROR, e => console.log(e))
                    .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, payload => {
                        console.log(payload);
                        const code = payload.code;
                        const deviceId = payload.device_id;
                        VKID.Auth.exchangeCode(code, deviceId)
                            .then(this.receivingAccess)
                            .catch(e => console.log(e));
                    });
            }
        },
    };
</script>

<style lang="css" scoped></style>
