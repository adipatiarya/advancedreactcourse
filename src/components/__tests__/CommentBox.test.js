import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(()=> {
    wrapped = mount(<CommentBox />);
});

afterEach(()=> {
    wrapped.unmount();
});

it('has a textarea and button', ()=> {
    
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('textarea and button', ()=>{

    beforeEach(()=> {

        wrapped.find('textarea').simulate('change', {
            target:{
                value:'new comment'
            }
        });
        wrapped.update();

    })
    it('has a textarea are that users can type in',()=>{
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('when form is submited, textarea gets emptied',() =>{
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
})