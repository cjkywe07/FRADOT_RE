import { useRouter } from "next/router";

export const useMovetoPage = () => {
    const router = useRouter();

    const onClickMoveToPage = (path) => () => router.push(path);

    return { onClickMoveToPage };
};
