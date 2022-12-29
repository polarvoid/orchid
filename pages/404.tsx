import React from 'react';

const Dark = () => {
    const searchLightRef = React.useRef<HTMLDivElement>(null);
    const [lightOn, setLightOn] = React.useState(false);

    const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (!searchLightRef.current) return;
        searchLightRef.current!.style.top = `${e.clientY}px`;
        searchLightRef.current!.style.left = `${e.clientX}px`;
    };

    const randTop = getRandom(50, 90);
    const randLeft = getRandom(0, 90);
    const [switchPosition, setSwitchPosition] = React.useState({ top: randTop, left: randLeft });
    const switchFlipHandler = () => {
        setLightOn((prev) => {
            if (prev) {
                setSwitchPosition({ top: getRandom(50, 95), left: getRandom(0, 95) });
            }
            return !prev;
        });
    };

    const overlayStyle = {
        "boxShadow": "0 0 0 10000px rgba(0,0,0,1), 0 0 20px 20px rgba(0,0,0,0.8) inset, 0 0 40px 40px rgba(0,0,0,0.6) inset, 0 0 60px 60px rgba(0,0,0,0.4) inset"
    };
    return (
        <div className="bg-gray-200 text-black w-full h-full" onMouseMove={onMouseMove}>
            <div className={`${lightOn ? "text-black" : "text-white"} z-50 h-[400px] pt-5 flex flex-col justify-center`}>
                {/* <p className="font-bold text-9xl ">404</p> */}
                <img src="/swing.svg" className="h-full" />
                <p className="font-normal text-sm text-center">We could not find what you were looking for.</p>
            </div>
            {!lightOn && <Switch isOn={lightOn} onChangeHandler={switchFlipHandler} position={switchPosition} />}
            {!lightOn && <div className={`w-[200px] h-[200px] rounded-full fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none`} style={overlayStyle} ref={searchLightRef}></div>}
            {/* {lightOn && <Swing />} */}
        </div >
    );
};

function Swing() {
    return (
        <div className="flex justify-center h-[400px]">
            <img src="/swing.svg" />
        </div>
    );
}

function getRandom(min: number, max: number) {
    return min + Math.random() * (max - min);
}

const Switch = ({ isOn, onChangeHandler, position }: { isOn: boolean, onChangeHandler: React.MouseEventHandler; position: { top: number; left: number; }; }) => {
    var switchClass = isOn ? "cube-switch active" : "cube-switch";
    const containerClasses = "border border-black rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.6)_inset_0_100px_50px_rgba(255,255,255,0.1)] p-6 bg-[#333]";
    const switchClasses = "border border-black w-[60px] h-[60px] relative bg-[#666] pointer-events-auto cursor-pointer";
    const containerStyle = {
        top: `${position.top}%`,
        left: `${position.left}%`
    };
    return (
        <div className={`${containerClasses} ${switchClass} absolute z-10`} style={containerStyle}>
            <div className={`${switchClasses} switch`} onClick={onChangeHandler}>
                <div className="block absolute left-[40%] text-white text-center text-sm text-[.5rem] switch-state top-1/2">Off</div>
                <div className="block absolute left-[40%] text-white text-center text-sm text-[.5rem] switch-state bottom-1/2">On</div>
            </div>
        </div>
    );
};

export default Dark;