export default function serviceWorkerRegistration() {
    let swUrl = `${process.env.PUBLIC_URL}/custom-service-worker.js`;
    navigator.serviceWorker.register(swUrl).then(response => {
        console.log('service worker registered.')
    })
}