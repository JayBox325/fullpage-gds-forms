import { Button, ButtonArrow, Details, GridCol, GridRow, H1, Heading, LeadParagraph, Main, Paragraph } from 'govuk-react'

export default function SlideWelcome(props) {

    const {
        fullpageApi,
        title,
        setShowBackground,
        showBackground,
        introduction
    } = props || {}

    return (
        <div className="section">

            <Main>
                <GridRow className="py-6 md:py-10 lg:py-12 xl:py-16 2xl:py-18">
                    <GridCol>
                        <div className="flex flex-col gap-6 md:gap-8 xl:gap-10">

                            <div className="">

                                {title ? (
                                    <H1 size="XLARGE">{title}</H1>
                                ) : ''}

                                {introduction ? (
                                    <LeadParagraph>{introduction}</LeadParagraph>
                                ) : ''}
                                
                                <p>This can also have a background that is persistent. <button className="underline" onClick={()=>{setShowBackground(!showBackground)}}>Toggle background</button></p>

                                <div className="pt-6 md:pt-10 xl:pt-16">
                                    <Button
                                        onClick={() => fullpageApi.moveSectionDown()}
                                        icon={<ButtonArrow />}
                                        start
                                    >Begin</Button>
                                </div>
                            </div>

                        </div>
                    </GridCol>
                </GridRow>
            </Main>
        </div>
    )
}