import {Card} from './card.js';
export function CardList(){
    // const uname="abc"
    // const desc="aiml"
    // const cons="6 shared connections"
    // const details={no:"42a9",col:"svecw"};
    const details={
        users:["abc","def","ghi","jkl","mno"],
        branches:["aiml","aids","cse","it","eee"],
        ids:["42c5","45d3","0583","1234","0204"]
    }
    // const users=["abc","def","ghi","jkl","mno"];
    // const branches=["aiml","aids","cse","it","eee"]
    // const ids=["42c5","45d3","0583","1234","0204"]
    const col="svecw"
    return(
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {
                details.users.map((user,index) => (<Card key={index} username={user} branchname={details.branches[index]} idno={details.ids[index]} clg={col}/>))
            }
        </div>
    );
}