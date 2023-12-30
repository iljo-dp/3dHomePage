import React from 'react';
import { Navbar } from '../components/navbar.js';
import { Footer } from '../components/footer.js';
import { Section } from '../components/section.js';
import { GridItem } from '../components/grid-item.js';

const projects = [
    // Add your projects here
    // { title: 'Project 1', description: 'Description 1', thumbnail: '/path/to/thumbnail1.png' },
    // { title: 'Project 2', description: 'Description 2', thumbnail: '/path/to/thumbnail2.png' },
    {title : 'This Website', description: 'This website was made using React.js and Next.js. It is hosted on Vercel.', thumbnail: '/images/this-website.png'},
];

const Makeshit = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Section title="My Portfolio">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                        {projects.map((project, index) => (
                            <GridItem key={index} title={project.title} description={project.description} thumbnail={project.thumbnail} />
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
};

export default Makeshit;
