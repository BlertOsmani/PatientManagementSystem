import { Formik } from "formik";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import {PiMagnifyingGlass} from 'react-icons/pi';
import {Button} from 'primereact/button';
import { PiSlidersHorizontal } from "react-icons/pi";

function List() {
    return ( 
        <div style={{height: 'calc(100% - 90px)'}} className="fixed pr-3 z-1 border-none border-right-1 surface-border surface-card overflow-auto">
            <h4>Patient list</h4>
            <Formik
                 initialValues={{
                    search: ''
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
            >
                {({
                    values,
                    handleChange
                }) => (
                    <div>
                        <form className="flex gap-1">
                            <IconField className="w-11" iconPosition="left">
                                <InputIcon className="flex justify-content-center align-items-center">
                                    <PiMagnifyingGlass className="text-lg"/>
                                </InputIcon>
                                <InputText className="w-12" name="search" value={values.search} onChange={handleChange} placeholder="Search" />
                            </IconField>
                            <Button className="w-auto gap-1" type="button" severity="contrast" size="small">
                                <PiSlidersHorizontal className="text-lg"/>
                            </Button>
                        </form>
                    </div>
                )}
            </Formik>
            <div className="flex flex-column w-12 mt-4 gap-2">
                <div className="w-12 border-1 p-3 border-round-lg surface-border surface-card">
                    <div className="flex align-items-center gap-1 mb-2">
                        <span className="font-bold text-medium">Blert Osmani</span>
                    </div>
                    <div className="flex flex align-items-center gap-1">
                        <span className="text-xs text-400">Male</span>
                        <div style={{width: '4px', height: '4px',}} className="border-circle surface-400"></div>
                        <span className="text-xs text-400">25/06/2003</span>
                        <div style={{width: '4px', height: '4px',}} className="border-circle surface-400"></div>
                        <span className="text-xs text-400">(383) 44 363 190</span>
                    </div>
                </div>
                <div className="w-12 border-1 p-3 border-round-lg surface-border surface-card">
                    <div className="flex align-items-center gap-1 mb-2">
                        <span className="font-bold text-medium">Blert Osmani</span>
                    </div>
                    <div className="flex flex align-items-center gap-1">
                        <span className="text-xs text-400">Male</span>
                        <div style={{width: '4px', height: '4px',}} className="border-circle surface-400"></div>
                        <span className="text-xs text-400">25/06/2003</span>
                        <div style={{width: '4px', height: '4px',}} className="border-circle surface-400"></div>
                        <span className="text-xs text-400">(383) 44 363 190</span>
                    </div>
                </div>
                <div className="w-12 border-1 p-3 border-round-lg surface-border surface-card">
                    <div className="flex align-items-center gap-1 mb-2">
                        <span className="font-bold text-medium">Blert Osmani</span>
                    </div>
                    <div className="flex flex align-items-center gap-1">
                        <span className="text-xs text-400">Male</span>
                        <div style={{width: '4px', height: '4px',}} className="border-circle surface-400"></div>
                        <span className="text-xs text-400">25/06/2003</span>
                        <div style={{width: '4px', height: '4px',}} className="border-circle surface-400"></div>
                        <span className="text-xs text-400">(383) 44 363 190</span>
                    </div>
                </div>
                <div className="w-12 border-1 p-3 border-round-lg surface-border surface-card">
                    <div className="flex align-items-center gap-1 mb-2">
                        <span className="font-bold text-medium">Blert Osmani</span>
                    </div>
                    <div className="flex flex align-items-center gap-1">
                        <span className="text-xs text-400">Male</span>
                        <div style={{width: '4px', height: '4px',}} className="border-circle surface-400"></div>
                        <span className="text-xs text-400">25/06/2003</span>
                        <div style={{width: '4px', height: '4px',}} className="border-circle surface-400"></div>
                        <span className="text-xs text-400">(383) 44 363 190</span>
                    </div>
                </div>
                <div className="w-12 border-1 p-3 border-round-lg surface-border surface-card">
                    <div className="flex align-items-center gap-1 mb-2">
                        <span className="font-bold text-medium">Blert Osmani</span>
                    </div>
                    <div className="flex flex align-items-center gap-1">
                        <span className="text-xs text-400">Male</span>
                        <div style={{width: '4px', height: '4px',}} className="border-circle surface-400"></div>
                        <span className="text-xs text-400">25/06/2003</span>
                        <div style={{width: '4px', height: '4px',}} className="border-circle surface-400"></div>
                        <span className="text-xs text-400">(383) 44 363 190</span>
                    </div>
                </div>
                <div className="w-12 border-1 p-3 border-round-lg surface-border surface-card">
                    <div className="flex align-items-center gap-1 mb-2">
                        <span className="font-bold text-medium">Blert Osmani</span>
                    </div>
                    <div className="flex flex align-items-center gap-1">
                        <span className="text-xs text-400">Male</span>
                        <div style={{width: '4px', height: '4px',}} className="border-circle surface-400"></div>
                        <span className="text-xs text-400">25/06/2003</span>
                        <div style={{width: '4px', height: '4px',}} className="border-circle surface-400"></div>
                        <span className="text-xs text-400">(383) 44 363 190</span>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default List;