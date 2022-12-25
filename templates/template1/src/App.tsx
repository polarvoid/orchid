import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Hero2 from './Hero2';
import Features from './Features';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <Navbar projectName="Project Name" items={[{
                name: 'Home',
                url: '/',
            }, {
                name: 'About',
                url: '/about',
            }, {
                name: 'Services',
                url: '/services',
            }, {
                name: 'Contact',
                url: '/contact',
            }
            ]} />
            <Hero url="https://www.zdnet.com/a/img/resize/adcb2eb2cc3f5562f7e80931308e2a08b01947ce/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/istock-1147195672-11.jpg?auto=webp&fit=crop&height=900&width=1200" />
            <Hero2 image="https://www.zdnet.com/a/img/resize/adcb2eb2cc3f5562f7e80931308e2a08b01947ce/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/istock-1147195672-11.jpg?auto=webp&fit=crop&height=900&width=1200" />
            <h2 className="text-3xl text-center font-bold pb-2 bg-base-200">Our Services</h2>
            <div className="grid grid-cols-3 bg-base-200 p-4 pb-6 gap-2">
                <Features image="https://img.freepik.com/free-photo/it-specialist-checking-code-computer-dark-office-night_1098-18699.jpg?w=1024&t=st=1671916171~exp=1671916771~hmac=09fcfeec2ae4a4dd1beeca21232cce43fd02363c06cdbe6851af5d8455589be5" imageAlt={'developer'} title={'Development'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan porttitor egestas fermentum nulla.'} action={''} />
                <Features image="https://img.freepik.com/premium-photo/word-design-written-top-colorful-geometric-3d-shapes_2227-1663.jpg?w=1024" imageAlt={'developer'} title={'Design'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan porttitor egestas fermentum nulla.'} action={''} />
                <Features image="https://img.freepik.com/premium-photo/search-engine-optimization-online-marketing-concept_31965-10840.jpg?w=1024" imageAlt={'developer'} title={'Optimization'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan porttitor egestas fermentum nulla.'} action={''} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
