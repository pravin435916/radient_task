import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="w-full overflow-hidden bg-[#212731] text-gray-300 p-8">
            <div className="flex justify-evenly items-center">
                <div className="mx-4">
                    <h2 className="text-lg font-bold">Categories</h2>
                    <ul className="mt-2">
                        <li>Web Builder</li>
                        <li>Hosting</li>
                        <li>Data Center</li>
                        <li>Robotic-Automation</li>
                    </ul>
                </div>
                <div className="mx-4">
                    <h2 className="text-lg font-bold">Contacts</h2>
                    <ul className="mt-2">
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Categories</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="flex gap-2 mx-4 items-center">
                    <h2 className="text-lg font-bold">United State</h2>
                    <span ><FaChevronDown /></span>
                </div>
            </div>
        </footer>
    );
}