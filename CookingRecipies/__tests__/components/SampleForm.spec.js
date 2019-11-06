import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import SampleForm from '../../Components/SampleForm';
import renderer from 'react-test-renderer';

describe('SampleForm', () => {
    it('clears the message field', () => {
        const {getByTestId} = render(<SampleForm/>);
        const TextInput = getByTestId('messageText');
        fireEvent.changeText(TextInput, 'Hello World');
        expect(TextInput.props.value).toEqual('Hello World');
        const Button = getByTestId('sendButton');
        fireEvent.press(Button);
        expect(TextInput.props.value).toEqual('');
    });

    it('SampleForm Snapshot', () => {
        const SFSnap = renderer.create(<SampleForm/>).toJSON();
        expect(SFSnap).toMatchSnapshot();
    })

    it('Send handler triggered upon Button press', () => {
        const messageTxt = 'Hello World';
        const sendHandler = jest.fn();
        const SampleForm = render(<SampleForm onSend={sendHandler} />);

        const TxtInput = SampleForm.getByTestId('messageText');

        fireEvent.changeText(TxtInput, messageTxt);
        fireEvent.press(TxtInput);
        expect(sendHandler).toHaveBeenCalledWith(messageTxt);
    });

    





});


