import type p5 from "p5";
import { useEffect, useRef } from "react";

function sketch(p5: p5) {
    p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

    p5.draw = () => {
        p5.background(250);
        p5.normalMaterial();
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.plane(100);
        p5.pop();
    };
}

export default function P5demo() {
    const canvasRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        (async () => {
            const p5 = (await import("p5")).default
            new p5(sketch, canvasRef.current!)
        })()
    }, [])

    return <div ref={canvasRef} />
}