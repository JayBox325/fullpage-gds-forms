'use client'

import ReactFullpage from '@fullpage/react-fullpage'
import SlideWelcome from '../SlideWelcome';
import SlideDefault from '../SlideDefault';
import { useState } from 'react';

export default function Fullpage() {
    const [showBackground, setShowBackground] = useState(false)

    const formSlides = [
        {
            title: 'How it works',
            introduction: "These slides are made from an array of object items with a 'components' array within that holds objects of the components that build these slides. Below are 'details' and 'paragraph' components.",
            components: [
                {
                    type: 'title',
                    title: 'How it works'
                },
                {
                    type: 'leadParagraph',
                    body: "These slides are made from an array of object items with a 'components' array within that holds objects of the components that build these slides. Below are 'details' and 'paragraph' components."
                },
                {
                    type: 'details',
                    title: 'This is a details component',
                    body: 'Ut cillum occaecat adipisicing ea nisi aute mollit.'
                },
                {
                    type: 'paragraph',
                    body: 'Paragraph fields support markdown and allow for **bold** text and *italics*, as well as [links](https://en.wikipedia.org/wiki/Markdown). `Inline` code snippets are also supported, as well as code blocks PROVIDED they start on their own line'
                },
            ]
        },
        {
            components: [
                {
                    type: 'title',
                    title: 'Tell us about yourself'
                },
                {
                    type: 'date',
                    label: 'What is your date of birth?'
                },
                {
                    type: 'select',
                    label: 'What is your gender?',
                    name: 'gender',
                    options: [
                        'Male',
                        'Female',
                        'Non-binary',
                        'Prefer not to say'
                    ]
                }
            ]
        },
        {
            title: 'This is a section that can scroll horizontally to other pages',
            slides: [
                'Slide',
                'Another slide',
                'Final slide'
            ]
        },
        {
            introduction: 'This is a slide with an intro and a single field',
            components: [
                {
                    type: 'input',
                    name: 'inputName',
                    label: 'This is the label',
                    helpText: 'With some small text to help.'
                }
            ]
        }
    ]

    return (
        <div className={`bg-white h-screen relative ${showBackground ? 'bg-gradient-to-tr from-[rgba(196,181,253,0.5)] via-[rgba(245,208,254,0.5)] to-[rgba(207,250,254,0.5)]' : ''}`}>

            {/* <Image src="/clouds.jpg" width={2000} height={1400} alt="" className="absolute top-0 left-0 bottom-0 right-0 object-cover opacity-30 z-10"/> */}

            <div className="relative z-20">
                <ReactFullpage
                    //fullpage options
                    licenseKey={'YOUR_KEY_HERE'}
                    scrollingSpeed={1000} /* Options here */

                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>

                                <SlideWelcome
                                    title="Reformerly by RIVIAM"
                                    introduction="Welcome to Reformerly, combining the words referral and form (this is an available .com by the way!). This is a starter repo to showcase the potential pairing of FullPage.js and the Gov.uk Design System to build beautifully interactive forms from JSON."
                                    setShowBackground={setShowBackground}
                                    showBackground={showBackground}
                                    fullpageApi={fullpageApi}
                                />

                                {formSlides.map((item,n) => (
                                    <SlideDefault
                                        key={n}
                                        totalSlides={formSlides.length}
                                        index={n}
                                        item={item}
                                        fullpageApi={fullpageApi}
                                    />
                                ))}
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </div>
        </div>
    )
}