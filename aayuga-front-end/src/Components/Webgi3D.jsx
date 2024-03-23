import React, {
    useRef,
    useState,
    useCallback,
    forwardRef,
    useImperativeHandle,
    useEffect
} from 'react';
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    CanvasSnipperPlugin,
    GammaCorrectionPlugin,
    addBasePlugins,
    // mobileAndTabletCheck

} from "webgi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollAnimation } from '../lib/scroll-animation.js';

gsap.registerPlugin(ScrollTrigger);

function Webgi3D() {
    const canvasRef = useRef(null);

    const memoizedScrollAnimation = useCallback(
        (position, target, onUpdate) => {
            if (position && target && onUpdate) {
                scrollAnimation(position, target, onUpdate);
            }
        }, []
    );

    const setupViewer = useCallback(async () => {

        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })

        const manager = await viewer.addPlugin(AssetManagerPlugin)

        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;
        const onUpdate = () => {
            needUpdate = true;
            viewer.setDirty();
        };

        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        await viewer.addPlugin(BloomPlugin)

        await addBasePlugins(viewer);

        await viewer.addPlugin(CanvasSnipperPlugin)

        viewer.renderer.refreshPipeline()

        await manager.addFromPath("scene-2.glb")

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

        camera.setCameraOptions({ controlsEnabled: false });
        window.scrollTo(0, 0);

        let needUpdate = true;

        viewer.addEventListener("preFrame", () => {
            if (needUpdate) {
                camera.positionTargetUpdated(true)
                needUpdate = false;
            }
        });

        memoizedScrollAnimation(position, target, onUpdate);
    }, []);

    useEffect(() => {
        setupViewer();
    }, []);



    return (
        <div className='fixed flex w-screen h-screen bg-transparent flex-col items-center justify-end z-10 pointer-events-none'>
            <canvas className='h-screen w-full bg-transparent' ref={canvasRef} />
        </div>
    );
}

export default Webgi3D;