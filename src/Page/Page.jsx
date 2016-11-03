import React from 'react';

/**
 * Page
 */
class Page extends React.Component {
    render () {
        console.log('Page children', this.props.children);

        return (
            <div className='page'>
                <h1>Hello, world!</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Page;
