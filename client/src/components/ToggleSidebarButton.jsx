import {Button} from 'primereact/button';
import { PiList } from 'react-icons/pi';
import PropTypes from 'prop-types';

function ToggleSidebarButton({onToggle}) {
    return ( 
        <Button severity="contrast" text className="flex p-0 justify-content-center align-items-center w-2rem h-2rem" onClick={onToggle}>
            <PiList className="text-xl" />
        </Button>
     );
}

ToggleSidebarButton.propTypes = {
    onToggle : PropTypes.func.isRequired,
}

export default ToggleSidebarButton;