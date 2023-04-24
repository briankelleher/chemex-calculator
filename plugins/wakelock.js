export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.wakelock = null
    return {
        provide: {
            startWakeLock: async () => {
                if ( 'wakeLock' in navigator ) {
                    try {
                        if ( nuxtApp.wakelock === null ) {
                            nuxtApp.wakelock = await navigator.wakeLock.request('screen')
                        }
                    } catch(err) {
                        return false
                    }
                }
            },
            releaseWakeLock: async () => {
                if ( nuxtApp.wakelock !== null ) {
                    await nuxtApp.wakelock.release()
                    nuxtApp.wakelock = null
                }
            }
        }
    }
})