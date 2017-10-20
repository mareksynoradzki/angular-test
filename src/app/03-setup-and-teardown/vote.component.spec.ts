import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let voteComponent:VoteComponent;

  beforeEach(()=>{
    voteComponent = new VoteComponent();
  });

  it('should increase totalVote then upVote', () => {
    //when
    voteComponent.upVote();
    //then
    expect(voteComponent.totalVotes).toBe(1);
  });

  it('should increase totalVote then downVote', () => {
    //when
    voteComponent.downVote();
    //then
    expect(voteComponent.totalVotes).toBe(-1);
  });
});