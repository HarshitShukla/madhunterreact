import { useEffect, useState, useCallback } from 'react';
import GlobalObject from '../../Common/constants';

function ImageLoader({ iden, src, errorImg, placeholderImg, className }) {
    const errorImgPath = GlobalObject.errorImgPath, loadingImgPath = GlobalObject.loadingImgPath;

    const [imgSrc, setSrc] = useState(placeholderImg || loadingImgPath || src);
    const [errorUrl] = useState(errorImgPath || errorImg);
    const [imagekey] = useState(iden);

    const onLoad = useCallback(() => {
        setSrc(src);
    }, [src]);

    const onError = useCallback(() => {
        const img = new Image();
        img.src = errorUrl;
        img.onload = () => setSrc(errorUrl);
    }, [errorUrl]);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.addEventListener("load", onLoad);
        img.addEventListener("error", onError);

        return () => {
            img.removeEventListener("load", onLoad);
            img.removeEventListener("error", onError);
        };
    }, [src, onLoad, onError]);

    return <img className={className} id={imagekey + '-img'} alt={imgSrc} src={imgSrc} />;
};

export default ImageLoader;