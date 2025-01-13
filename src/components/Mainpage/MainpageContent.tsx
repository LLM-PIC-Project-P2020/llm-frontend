
interface Props {
    children: string | JSX.Element | JSX.Element[]
}

function ContentFlexBox ({children} : Props) {
    return <div style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-around"}}>
        {children}
    </div>
}

function ContentFlexText ({children} : Props) {
    return <div style={{flexBasis: "50%"}}>
        {children}
    </div>
}

function ContentFlexImage({children} : Props) {
    return <div style={{flexBasis: "40%"}}>
        {children}
    </div>
}

function MainpageContent () {
    return <main style={{maxWidth: "1200px", marginLeft: "auto", marginRight: "auto"}}>
        <img src="placeholder-image.jpg" style={{width: "1200px", height: "600px"}}/>
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <ContentFlexBox>
                <ContentFlexText>
                    AAAA
                </ContentFlexText>
                <ContentFlexImage>
                    <img src="placeholder-image.jpg" width={"100%"}/>
                </ContentFlexImage>
            </ContentFlexBox>
            <ContentFlexBox>
                <ContentFlexImage>
                    <img src="placeholder-image.jpg" width={"100%"}/>
                </ContentFlexImage>
                <ContentFlexText>
                    BBBB
                </ContentFlexText>
            </ContentFlexBox>
            <ContentFlexBox>
                <ContentFlexText>
                    CCCC
                </ContentFlexText>
                <ContentFlexImage>
                    <img src="placeholder-image.jpg" width={"100%"}/>
                </ContentFlexImage>
            </ContentFlexBox>
        </div>
    </main>
}

export default MainpageContent;
