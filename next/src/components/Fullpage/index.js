'use client'

import ReactFullpage from '@fullpage/react-fullpage'
import FullpageSlide from '../SlideDefault';
import SlideWelcome from '../SlideWelcome';
import SlideDefault from '../SlideDefault';

export default function Fullpage() {

    const formSlides = [
        {
            title: 'Middle slide',
            introduction: "Sint mollit sunt exercitation deserunt ex eu labore sint est consequat occaecat. Ut nostrud nulla est ut adipisicing ullamco cupidatat et exercitation dolor ea tempor exercitation.",
            components: [
                {
                    type: 'details',
                    title: 'This is a details component',
                    body: <p>Ut cillum occaecat adipisicing ea nisi aute mollit.</p>
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
        <ReactFullpage
            //fullpage options
            licenseKey={'YOUR_KEY_HERE'}
            scrollingSpeed={1000} /* Options here */

            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>

                        <SlideWelcome
                            title="Welcome to Formium by RIVIAM"
                            introduction="This is an example build with the Gov.uk Design System and Fullpage.js."
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
    )
}