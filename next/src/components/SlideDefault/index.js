import { BackLink, Button, ButtonArrow, DateField, Details, ErrorText, GridCol, GridRow, H1, H2, Heading, HintText, InputField, Label, LabelText, LeadParagraph, Link, Main, Paragraph, Select } from 'govuk-react'
import { Input } from 'postcss'

export default function SlideDefault(props) {

    const {
        fullpageApi,
        totalSlides,
        index,
        item,
    } = props || {}

    const {
        components = [],
        slides = []
    } = item || {}

    return (
        <div className="section">

            {slides.length ? (
                <>
                    <div className="slide flex items-center justify-center text-center" data-anchor="slide1">
                        <Main>
                            <GridRow className="py-6 md:py-10 lg:py-12 xl:py-16 2xl:py-18">
                                <GridCol>
                                    <div className="flex flex-col gap-6 md:gap-8 xl:gap-10">

                                        <div className="">
                                            <H1 size="XLARGE">Section with horizontal slides</H1>
                                            <LeadParagraph>For this example, use the arrows on the right and left to scroll through them.</LeadParagraph>
                                        </div>

                                        <div className="pt-6 md:pt-10 xl:pt-16">
                                            <Button
                                                onClick={() => fullpageApi.moveSlideRight()}
                                                icon={<ButtonArrow />}
                                            >Go right</Button>
                                        </div>

                                    </div>
                                </GridCol>
                            </GridRow>
                        </Main>
                    </div>
                    <div className="slide flex items-center justify-center text-center" data-anchor="slide2">
                        <Main>
                            <GridRow className="py-6 md:py-10 lg:py-12 xl:py-16 2xl:py-18">
                                <GridCol>
                                    <div className="flex flex-col gap-6 md:gap-8 xl:gap-10">

                                        <div className="">
                                            <H1 size="XLARGE">Lorem ipsum</H1>
                                            <LeadParagraph>Ad nostrud sint Lorem magna aute occaecat proident fugiat nulla deserunt minim labore.</LeadParagraph>
                                        </div>

                                        <div className="pt-6 md:pt-10 xl:pt-16 flex flex-row gap-5">
                                            <div>
                                                <Button
                                                    onClick={() => fullpageApi.moveSlideRight()}
                                                    icon={<ButtonArrow />}
                                                >Go right</Button>
                                            </div>
                                            <div>
                                                <Button
                                                    onClick={() => fullpageApi.moveSectionDown()}
                                                    icon={<ButtonArrow />}
                                                >Continue down</Button>
                                            </div>
                                        </div>

                                    </div>
                                </GridCol>
                            </GridRow>
                        </Main></div>
                    <div className="slide flex items-center justify-center text-center" data-anchor="slide3"> Slide 3 </div>
                    <div className="slide flex items-center justify-center text-center" data-anchor="slide4"> Slide 4 </div>
                </>
            ) : (

                <Main>
                    <GridRow className="py-6 md:py-10 lg:py-12 xl:py-16 2xl:py-18">
                        <GridCol>
                            <div className="flex flex-col gap-6 md:gap-8 xl:gap-10">

                                {components.length ? (
                                    <div className="flex flex-col">
                                        
                                        {components.map((item, n) => {
                                            switch (item.type) {

                                                case 'title':
                                                    return (
                                                        <H2 size="LARGE">{item.title}</H2>
                                                    )

                                                case 'leadParagraph':
                                                    return (
                                                        <LeadParagraph>{item.body}</LeadParagraph>
                                                    )

                                                case 'details':
                                                    return (
                                                        <Details summary={item.title}>
                                                            <Paragraph>{item.body}</Paragraph>
                                                        </Details>
                                                    )

                                                case 'paragraph':
                                                    return (
                                                        <Paragraph>{item.body}</Paragraph>
                                                    )

                                                case 'date':
                                                    return (
                                                        <DateField
                                                            errorText="Error message goes here. This is how they look."
                                                        >
                                                            {item.label}
                                                        </DateField>
                                                    )

                                                case 'input':
                                                    return (
                                                        <>
                                                            <InputField
                                                                hint={item.helpText}
                                                                input={{
                                                                    name: item.name,
                                                                    onChange: function noRefCheck() { }
                                                                }}
                                                            // meta={{
                                                            //     error: 'This is an example error',
                                                            //     touched: true
                                                            // }}
                                                            >
                                                                {item.label}
                                                            </InputField>
                                                        </>
                                                    )

                                                case 'select':
                                                    return (
                                                        <Select
                                                            input={{
                                                                name: item.name,
                                                                onChange: function noRefCheck() { }
                                                            }}
                                                            label={item.label}
                                                        >
                                                            <option value="">Please select...</option>
                                                            {item.options.map((option, n) => (
                                                                <option value={option} key={n}>
                                                                    {option}
                                                                </option>
                                                            ))}
                                                        </Select>
                                                    )

                                                default:
                                                    break;
                                            }
                                        })}
                                    </div>
                                ) : ''}

                                <div className="relative">

                                    {/* Show forward button if not the last slide */}
                                    <div className="">
                                        {index + 1 != totalSlides ? (
                                            <Button
                                                className="govuk-!-margin-0"
                                                onClick={() => fullpageApi.moveSectionDown()}
                                                icon={<ButtonArrow />}
                                            >Continue</Button>
                                        ) : ''}
                                    </div>

                                    <div className="xl:absolute xl:pr-6 xl:right-full xl:top-1/2 xl:-translate-y-1/2">
                                        <BackLink href="#" className="" onClick={(e) => {
                                            e.preventDefault()
                                            fullpageApi.moveSectionUp()
                                        }}>
                                            Back
                                        </BackLink>
                                    </div>

                                </div>

                            </div>
                        </GridCol>
                    </GridRow>
                </Main>
            )}
        </div>
    )
}