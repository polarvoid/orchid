import React from 'react';
import NavbarWrapper from '../components/NavbarWrapper';
import { Card } from 'flowbite-react';

const Test = () => {
    const templates = [
        {
            name: 'Template 1',
            description: 'Lorem ipsum dolor sit amet consectetur. Auctor bibendum imperdiet sed euismod.',
            image: 'https://picsum.photos/720/360'
        },
        {
            name: 'Template 2',
            description: 'Lorem ipsum dolor sit amet consectetur. Auctor bibendum imperdiet sed euismod.',
            image: 'https://picsum.photos/720/360'
        },
        {
            name: 'Template 3',
            description: 'Lorem ipsum dolor sit amet consectetur. Auctor bibendum imperdiet sed euismod.',
            image: 'https://picsum.photos/720/360'
        },
        {
            name: 'Template 4',
            description: 'Lorem ipsum dolor sit amet consectetur. Auctor bibendum imperdiet sed euismod.',
            image: 'https://picsum.photos/720/360'
        },
    ];
    return (
        <NavbarWrapper>
            <div className="flex flex-col items-center gap-4 pt-6 w-full p-6">
                <p className="font-bold text-5xl">Choose your template</p>
                <p>Lorem ipsum dolor sit amet consectetur. Auctor bibendum imperdiet sed euismod.</p>
                <div className='grid grid-cols-2 justify-around gap-2 w-full px-2'>
                    {
                        templates.map((template, index) => {
                            return (
                                <Card key={template.name}>
                                    <div className='flex flex-col items-center'>
                                        <img src={template.image} alt="{`Preview for ${template.name}`}" />
                                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {template.name}
                                        </h5>
                                        <p className="font-normal text-gray-700 dark:text-gray-400">
                                            {template.description}
                                        </p>
                                    </div>
                                </Card>
                            );
                        })
                    }
                </div>
            </div>
        </NavbarWrapper>
    );
};

export default Test;
