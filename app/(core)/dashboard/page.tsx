"use client"

import Popper from "@mui/material/Popper";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import { ClickAwayListener, Grow, MenuItem, MenuList, Paper } from "@mui/material";
import { signOut } from "next-auth/react";
import SidebarNavigation from "@/modules/theme/components/SidebarNavigation";

export default function Dashboard() {

    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    }

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    }

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    return (
        <div className="flex min-w-[100vh]">
            <SidebarNavigation />

            <div className="flex flex-col w-full">

                <div className="sticky bg-emerald-800 text-gray-50 flex items-center justify-between px-5">

                    <div className="flex gap-2 items-center">
                        <div>ENV:</div>
                        <select className="bg-emerald-300 h-full text-gray-900 rounded-sm p-2">
                            <option>NO ENVIRONMENT</option>
                            <option>local</option>
                            <option>proxmox</option>
                            <option>orangepi</option>
                        </select>
                    </div>

                    <div className="item">
                        <Button
                            id="account-menu"
                            ref={anchorRef}
                            aria-controls={open ? 'composition-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                        >
                            admin
                        </Button>
                        <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                            placement === 'bottom-start' ? 'left top' : 'left bottom',
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                                autoFocusItem={open}
                                                id="composition-menu"
                                                aria-labelledby="composition-button"
                                                onKeyDown={handleListKeyDown}
                                            >
                                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                                <MenuItem onClick={() => {
                                                    signOut({
                                                        redirect: true
                                                    })
                                                }}>Logout</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                </div>

                <main className="bg-gray-50">
                    Content
                </main>

                <footer>
                    footer
                </footer>
            </div>
        </div>
    )
}