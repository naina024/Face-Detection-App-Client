import React, { useState } from 'react';
import Login from '../Login/Login'
import Signup from '../Signup/Signup';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import ImageBox from '../ImageBox/ImageBox';
import Navbar from '../Navbar/Navbar';
import User from '../User/User';


const Dashboard = () => {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [box, setBox] = useState([]);
    const [route, setRoute] = useState('signin');
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    });


    function onRouteChange(route){
        if (route === 'signout') {
            setBox([]);
            setInput('');
            setImageUrl('');
            setRoute('signin');
            setIsSignedIn(false);
            setUser({
                id: '',
                name: '',
                email: '',
                entries: 0,
                joined: ''
            });
        } else if (route === 'home') {
            setIsSignedIn(true);
        }
        setRoute(route);
    }


    function loadUser(data){
        setUser({
            id: data.id,
            name: data.name,
            email: data.email,
            entries: data.entries,
            joined: data.joined
        })
    }

    function calculateFaceLocation(data){
        const clarifaiFace = data.region_info.bounding_box;
        const image = document.getElementById('input_image');
        const width = Number(image.width);
        const height = Number(image.height);
        return (
            {
                leftCol: clarifaiFace.left_col * width,
                topRow: clarifaiFace.top_row * height,
                rightCol: width - (clarifaiFace.right_col * width),
                bottomRow: height - (clarifaiFace.bottom_row * height)
            }
        );
    }
    

    function displayBox(box) {
        setBox(box);
    }

    function onInputChange(event) {
        setInput(event.target.value);
        setImageUrl(input);
    }

    function onSubmit() {
        setImageUrl(input);
        var faceBox = [];
            fetch('LINK_YOUR_SERVER',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    input: input,
                })
            })
            .then(response => response.json())
        	.then(response => {
                // console.log('faces : ',response.outputs[0].data.regions.length, response);
                var number_of_faces = response.outputs[0].data.regions.length;
                for(var i = 0; i<number_of_faces; i++) 
                {
                    faceBox.push(calculateFaceLocation(response.outputs[0].data.regions[i]));
                }
                if (response){
                    fetch('https://boiling-depths-83144.herokuapp.com/image',{
                        method: 'put',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            id: user.id,
                        })
                    })
                    .then(response => response.json())
                    .then(count => setUser(user => ({...user, entries: count})))
                    .catch(error => console.log(error))
                }
                displayBox(faceBox);
        	})
        	.catch((error) => console.log(error));
    }

    return (
        <>
            <Navbar isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
                {route === 'home'
                ? (<div>
                    <User name={user.name} entries={user.entries}/>
                    <div
                        className={
                            'w-full max-w-md mx-auto shadow flex flex-col justify-center p-2 gap-4 items-center'
                        }
                    >
                        <ImageLinkForm
                            onInputChange={onInputChange} 
                            onSubmit={onSubmit}
                        />
                        <ImageBox url={imageUrl} box={box}/>
                    </div>
                </div>)
                :(
                    route === 'signin'
                    ? <Login loadUser={loadUser} onRouteChange={onRouteChange} />
                    : <Signup loadUser={loadUser} onRouteChange={onRouteChange} /> 
                )
                }
        </>
    );
};

export default Dashboard;
