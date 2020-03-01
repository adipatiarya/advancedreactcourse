import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';


beforeEach(()=> {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status:200,
        response:[{name:'Fetch #1'}, {name:'Fetch #2'}]
    });
});

afterEach(()=> {
    moxios.uninstall();
});


it('can fetch a list of comment and display them',(done)=> {
    // Atem to render the *entire*  App
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    // Find the 'fetchcomments', button and click it

    wrapped.find('.fetch-comments').simulate('click');

    // Expect to find a list of comment
    moxios.wait(()=> {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2)
        done();
        wrapped.unmount();

    })
    
});