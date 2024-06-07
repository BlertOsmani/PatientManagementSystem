import './sidebar.css';
import { useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Ripple } from 'primereact/ripple';
import { Link } from 'react-router-dom';
import { StyleClass } from 'primereact/styleclass';
import { PiHouse, PiHeartbeat, PiGear, PiUsers, PiCaretDown, PiFiles, PiCurrencyCircleDollar, PiCaretDownBold, PiCalendarDots, PiLetterCircleH } from "react-icons/pi";
import PropTypes from 'prop-types';

export default function Sidemenu({ visible }) {
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);

    return (
        <div className="card flex justify-content-center">
            <Sidebar id="sidebar"
                visible={visible} // Always visible, just changes size
                content={() => (
                    <div className="min-h-screen flex relative lg:static">
                        <div id="app-sidebar-2" className="bg-white h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: visible ? '280px' : '60px' }}>
                            <div className="flex flex-column h-full">
                                <div className="border-bottom-1 mx-3 border-none surface-border flex align-items-center logo justify-content-between h-5rem flex-shrink-0">
                                    <span className="inline-flex align-items-center gap-2">
                                        <span className="font-semibold text-2xl text-primary">MedPulse</span>
                                    </span>
                                </div>
                                <div className="overflow-y-auto">
                                    <ul className="list-none p-3 m-0">
                                        <li>
                                            <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <div ref={btnRef1} className="p-ripple favorites p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                    <span className="font-medium">FAVORITES</span>
                                                    <PiCaretDownBold className="text-xl" />
                                                    <Ripple />
                                                </div>
                                            </StyleClass>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <Link to="/dashboard">
                                                        <Button text className="link-button p-ripple flex align-items-center justify-content-between cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <div className="flex gap-2">
                                                                <PiHouse className="text-lg" />
                                                                <span className="p-0">Dashboard</span>
                                                            </div>
                                                        </Button>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                        <Link ref={btnRef2}>
                                                            <Button text className="link-button p-ripple flex justify-content-between align-items-center gap-2 cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <div className="flex gap-2">
                                                                    <PiHeartbeat className="text-xl" />
                                                                    <span className="">Patients</span>
                                                                </div>
                                                                <PiCaretDown />
                                                            </Button>
                                                        </Link>
                                                    </StyleClass>
                                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <Link to="/patients">
                                                                <Button text className="link-button justify-content-between p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                    <div className="flex gap-2">
                                                                        <span className="">All patients</span>
                                                                    </div>
                                                                </Button>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/patient/new">
                                                                <Button text className="link-button justify-content-between p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                    <div className="flex gap-2">
                                                                        <span className="">Add new patient</span>
                                                                    </div>
                                                                </Button>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                        <Button ref={btnRef3} text className="link-button justify-content-between p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <div className="flex gap-2">
                                                                <PiCalendarDots className="text-xl" />
                                                                <span className="">Appointments</span>
                                                            </div>
                                                            <PiCaretDown />
                                                        </Button>
                                                    </StyleClass>
                                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <Link to="/appointments">
                                                                <Button text className="link-button justify-content-between p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                    <div className="flex gap-2">
                                                                        <span className="">View appointments</span>
                                                                    </div>
                                                                </Button>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/appointments/schedule">
                                                                <Button text className="link-button justify-content-between p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                    <div className="flex gap-2">
                                                                        <span className="">Schedule appointments</span>
                                                                    </div>
                                                                </Button>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                        <Button ref={btnRef4} text className="link-button justify-content-between p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <div className="flex gap-2">
                                                                <PiLetterCircleH className="text-xl" />
                                                                <span className="">Visits</span>
                                                            </div>
                                                            <PiCaretDown />
                                                        </Button>
                                                    </StyleClass>
                                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <Link to="/visits">
                                                                <Button text className="link-button justify-content-between p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                    <div className="flex gap-2">
                                                                        <span className="">View visits</span>
                                                                    </div>
                                                                </Button>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/visits/new">
                                                                <Button text className="link-button justify-content-between p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                    <div className="flex gap-2">
                                                                        <span className="">Add new visits</span>
                                                                    </div>
                                                                </Button>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="BlertOsmani/patients/">
                                                        <Button text className="link-button justify-content-between p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <div className="flex gap-2">
                                                                <PiUsers className="text-xl" />
                                                                <span className="">Your patients</span>
                                                            </div>
                                                        </Button>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/payment">
                                                        <Button text className="link-button justify-content-between p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <div className="flex gap-2">
                                                                <PiCurrencyCircleDollar className="text-xl" />
                                                                <span className="">Billing & Payments</span>
                                                            </div>
                                                        </Button>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/visits/new">
                                                        <Button text className="link-button justify-content-between p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <div className="flex gap-2">
                                                                <PiFiles className="text-xl" />
                                                                <span className="">Reports</span>
                                                            </div>
                                                        </Button>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/visits/new">
                                                        <Button text className="link-button justify-content-between p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <div className="flex gap-2">
                                                                <PiGear className="text-xl" />
                                                                <span className="">Settings</span>
                                                            </div>
                                                        </Button>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                                    <a className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                                        <span className="font-bold">Amy Elsner</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            ></Sidebar>
        </div>
    )
}

Sidemenu.propTypes = {
    visible: PropTypes.bool.isRequired,
};
