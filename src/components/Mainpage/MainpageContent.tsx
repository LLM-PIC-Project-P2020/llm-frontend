import { H4 } from "@blueprintjs/core";

import Header from '/src/assets/Header.jpg';
import advantage_1 from '/src/assets/advantage-1.jpg';
import advantage_2 from '/src/assets/advantage-2.jpg';
import advantage_3 from '/src/assets/advantage-3.jpg'; 

import "./mainpage.css";

interface Props {
    children: string | JSX.Element | JSX.Element[]
}

function ContentFlexBox ({children} : Props) {
    return <div className="context-flex-box-container">
        {children}
    </div>;
}

function ContentFlexText ({children} : Props) {
    return <div style={{flexBasis: "50%"}}>
        {children}
    </div>;
}

function ContentFlexImage({children} : Props) {
    return <div style={{flexBasis: "40%"}}>
        {children}
    </div>;
}

function MainpageContent () {
    return <main style={{maxWidth: "1200px", marginLeft: "auto", marginRight: "auto"}}>
        <img src={Header} style={{width: "1200px", height: "600px"}}/>
        <div className="context-flex-full-container">
            <ContentFlexBox>
                <ContentFlexText>
                    <H4>Guided by AI</H4>
                    <p>An AI-guided programming platform offers personalized, step-by-step assistance, helping learners navigate complex concepts with ease. The AI acts as a virtual tutor, providing real-time feedback, debugging support, and tailored explanations to reinforce understanding. This ensures students stay on track while building confidence in their coding skills.</p>
                </ContentFlexText>
                <ContentFlexImage>
                    <img className="img-advantages" src={advantage_1}/>
                </ContentFlexImage>
            </ContentFlexBox>
            <ContentFlexBox>
                <ContentFlexImage>
                    <img className="img-advantages" src={advantage_2}/>
                </ContentFlexImage>
                <ContentFlexText>
                    <H4>Customized Learning</H4>
                    <p>Every learner progresses at their own pace, and an AI-driven platform adapts to individual needs. By analyzing strengths and weaknesses, it delivers tailored exercises, challenges, and resources to maximize efficiency. This personalized approach ensures no one gets left behind—or held back—by a one-size-fits-all curriculum.</p>
                </ContentFlexText>
            </ContentFlexBox>
            <ContentFlexBox>
                <ContentFlexText>
                    <H4>Rapid Skill Development</H4>
                    <p>With instant feedback and optimized learning paths, an AI-powered platform accelerates mastery of programming concepts. Learners spend less time stuck on errors and more time applying knowledge in practical scenarios. The result? Faster progress, deeper retention, and the ability to tackle real-world coding challenges sooner.</p>
                </ContentFlexText>
                <ContentFlexImage>
                    <img className="img-advantages" src={advantage_3}/>
                </ContentFlexImage>
            </ContentFlexBox>
        </div>
    </main>;
}

export default MainpageContent;
