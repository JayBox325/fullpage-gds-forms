import { BackLink, Button, ButtonArrow, DateField, Details, ErrorText, GridCol, GridRow, H1, Heading, HintText, InputField, Label, LabelText, LeadParagraph, Link, Main, Paragraph, Select } from 'govuk-react'
import { Input } from 'postcss'

export default function SlideDefault(props) {

    const {
        fullpageApi,
        totalSlides,
        index,
        item,
    } = props || {}

    const {
        title,
        introduction,
        components = []
    } = item || {}

    return (
        <div className="section bg-white">

            <Main>
                <GridRow className="py-6 md:py-10 lg:py-12 xl:py-16 2xl:py-18">
                    <GridCol>
                        <div className="flex flex-col gap-6 md:gap-8 xl:gap-10">

                            <div className="">

                                {title ? (
                                    <H1 size="LARGE">{title}</H1>
                                ) : ''}

                                {introduction ? (
                                    <LeadParagraph>{introduction}</LeadParagraph>
                                ) : ''}
                            </div>


                            {components.length ? (
                                <div className="flex flex-col gap-4">
                                    {components.map((item, n) => {
                                        switch (item.type) {

                                            case 'details':
                                                return (
                                                    <Details summary={item.title}>
                                                        {item.body}
                                                    </Details>
                                                )

                                            case 'paragraph':
                                                return (
                                                    <Paragraph>{item.body}</Paragraph>
                                                )

                                            case 'date':
                                                return (
                                                    <DateField
                                                        errorText="Error message goes here"
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
        </div>
    )
}