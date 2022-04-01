import { useEffect, useState } from 'react';
import { validate, VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../utils/validators';
import styles from './PlayListForm.module.css';
import BaseButton from './BaseButton';
import BaseInput from './BaseInput';
import BaseTextarea from './BaseTextarea';
import axios from 'axios';

const CreatePlaylistForm = (props) => {
    
    const [playListForm, setPlayListForm] = useState({
        form: {
            title: {
                value: '',
                isValid: false,
                validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)],
                errorMessage: 'Please fill in the title (min. 10 characters)'
            },
            description: {
                value: '',
                isValid: false,
                validators: [VALIDATOR_REQUIRE()],
                errorMessage: 'Please fill in the description'
            }
        },
        isValid: false
    });
    const [submitMessage, setSubmitMessage] = useState('')

    useEffect(() => {
        let isFormValid = true;
        for(const input in playListForm.form) {
            isFormValid = isFormValid && playListForm.form[input].isValid
        }
        setPlayListForm(prevState => ({
            ...prevState,
            isValid: isFormValid
        }))
    }, [playListForm.form])

    const handleFormChange = (e) => {
        const { name, value } = e.target
        const isValid = validate(value, playListForm.form[name].validators);
        setPlayListForm(prevState => ({
            ...prevState,
            form: {
                ...prevState.form,
                [name]: {
                    ...prevState.form[name],
                    value,
                    isValid
                }
            }
        }))
    }

    const handleCreatePlayList = async () => {
        const authToken = window.location.href.split('access_token=')[1].split('&')[0];
        const uris = [...props.selectedAlbums].join(',');
        const auth = {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        }

        const { data: { id: userId }} = await axios
            .get(`https://api.spotify.com/v1/me/`, auth)
        const { data: { id: playlistId }} = await axios
            .post(
                `https://api.spotify.com/v1/users/${userId}/playlists`, 
                {
                    name: playListForm.form.title.value,
                    description: playListForm.form.description.value,
                    public: false
                }, 
                auth
            );
        axios.post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${uris}`, {}, auth)
            .then(res => {
                setSubmitMessage('Playlist created successfully')
            })
            .catch(err => {
                setSubmitMessage('Something went wrong')
            })
    }

    return (
        <div className={styles.playListForm}>
            <BaseInput
                val={playListForm.form.title.value}
                name="title"
                placeholder="Please enter the playlist title"
                handleValChange={handleFormChange}
                showErrorMessage={!playListForm.form.title.isValid}
                errorMessage={playListForm.form.title.errorMessage} 
            />
            <BaseTextarea
                val={playListForm.form.description.value}
                name="description"
                placeholder="Please enter the playlist description"
                handleValChange={handleFormChange}
                showErrorMessage={!playListForm.form.description.isValid}
                errorMessage={playListForm.form.description.errorMessage} 
            />
            <BaseButton text="Create Playlist" handleButtonClick={handleCreatePlayList} disable={!playListForm.isValid} />
            {
                submitMessage && <p>{submitMessage}</p>
            }
        </div>
    )
}

export default CreatePlaylistForm
