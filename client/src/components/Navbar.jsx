import { useLocation } from "react-router-dom";
import ToggleSidebarButton from "./ToggleSidebarButton";
import PropTypes from 'prop-types';
import {Button} from 'primereact/button';
import {PiBellRinging} from 'react-icons/pi';

const pageConfig = {
    '/dashboard': {
        name: 'Dashboard',
        buttons: []
    },
    '/patients': {
        name: 'Patients',
        buttons: [{ label: 'Add new patient', size: 'small' }]
    },
    '/visits': {
        name: 'Visits',
        buttons: [{ label: 'Add new visit', size: 'small' }]
    }
    // Add more routes as needed
};

function Navbar({onToggle}) {
    const location = useLocation();
    const currentConfig = pageConfig[location.pathname] || { name: 'Page', buttons: [] };

    return (  
        <div className="flex align-items-center justify-content-between h-5rem border-bottom-1 border-none surface-border">
            <div className="flex align-items-center gap-2">
                <ToggleSidebarButton onToggle={onToggle}/>
                <h2>{currentConfig.name}</h2>
            </div>
            <div className="flex gap-1">
                <ButtonRenderer buttons={currentConfig.buttons}/>
                <Button text severity="contrast">
                    <PiBellRinging className="text-xl"/>
                </Button>
            </div>
        </div>
    );
}

function ButtonRenderer({ buttons }) {
    return (
        <>
            {buttons.map((button, index) => (
                <Button key={index} size={button.size} label={button.label} />
            ))}
        </>
    );
}

Navbar.propTypes = {
    onToggle: PropTypes.func.isRequired,
}
ButtonRenderer.propTypes = {
    buttons: PropTypes.array.isRequired,
}

export default Navbar;