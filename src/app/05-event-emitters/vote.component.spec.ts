import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raised voiteChanged value when vote', () => {
    //given
    let voteValue: number = null;
    component.voteChanged.subscribe(vv=> voteValue = vv);
    //when
    component.upVote();

    //then
    expect(voteValue).not.toBeNull();
    expect(voteValue).toBe(1);

  });
});