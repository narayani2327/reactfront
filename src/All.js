import React from 'react';
import pic from './pic.jpg';
import Art from './Art';
import Header from './Header';
class All extends React.Component{
    render(){
        return([
            <>
                <div className='latestt'>
                    <div className='arrt'>
                        <Art/>
                        <Art/>
                        <Art/>
                        <Art/>
                        <Art/>
                        <Art/>
                        <Art/>
                        <Art/>
                    </div>
                    <div className='left'>
                        <div className='top'>
                            <h2>Top Stories</h2>
                            <img src={pic}/>
                            <h2>Catch waves with adventure guide</h2>
                            <div className='small'>
                                <img src={pic}/>
                                <p>Catch waves with adventure guide</p>
                            </div>
                            <div className='small'>
                                <img src={pic}/>
                                <p>Catch waves with adventure guide</p>
                            </div>
                            <div className='small'>
                                <img src={pic}/>
                                <p>Catch waves with adventure guide</p>
                            </div>
                            <div className='small'>
                                <img src={pic}/>
                                <p>Catch waves with adventure guide</p>
                            </div>
                            <div className='small'>
                                <img src={pic}/>
                                <p>Catch waves with adventure guide</p>
                            </div>
                            <div className='small'>
                                <img src={pic}/>
                                <p>Catch waves with adventure guide</p>
                            </div>
                            <div className='small'>
                                <img src={pic}/>
                                <p>Catch waves with adventure guide</p>
                            </div>
                            <div className='small'>
                                <img src={pic}/>
                                <p>Catch waves with adventure guide</p>
                            </div>
                        </div>
                        <div className='add'>Advertisement</div>
                    </div>
                </div>
            </>
        ])
    }
}
export default All;