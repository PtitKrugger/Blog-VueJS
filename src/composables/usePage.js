import { onMounted, onUnmounted, ref } from "vue";

export default function usePage() {
    const page = ref(parseHash().split(':')[0]);
    const param = ref(parseHash().split(':')[1]);
    let removeListener = () => {};

    onMounted(() => {
        const handleChange = () => {
            const hash = parseHash().split(':');
            page.value = hash[0];
            param.value = hash[1] || null;
        };
        window.addEventListener('hashchange', handleChange);
        removeListener = () => {
            window.removeEventListener('hashchange', handleChange);
        };
    });

    onUnmounted(() => {
        removeListener();
    });
    
    return {
        page,
        param,
    };
}

function parseHash() {
    return location.hash.replace('#', '')
}