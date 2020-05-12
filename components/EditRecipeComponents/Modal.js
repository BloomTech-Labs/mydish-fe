import React, { useState } from 'react';
import {
  View,
  Modal,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
//Analytics
import { Analytics, Event } from 'expo-analytics';
const analytics = new Analytics('UA-159002245-1');
import theme from '../../styles/theme.style';
import styles from '../../styles/commitModalStyles';
import { maxAuthorComment } from '../../constants/maxLength';
const CommitModal = (props) => {
  const { commitModal, setCommitModal, saveButtonEditedRecipe } = props;
  const [author_comment, setAuthor_comment] = useState();
  const [highlighted, setHighlighted] = useState(false);

  const saveModalHandler = () => {
    if (!author_comment) {
      setHighlighted(true);
    } else {
      saveButtonEditedRecipe(author_comment);
    }
    analytics
      .event(new Event('Recipe', 'User edited existing recipe'))
      .then(() => console.log('Recipe edited'))
      .catch((e) => console.log(e.message));
  };

  const closeModalHandler = () => {
    setHighlighted(false);
    setCommitModal({ save: false, cancel: false });
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <Modal visible={commitModal.save} animationType="fade" transparent>
        <TouchableHighlight onPress={closeModalHandler}>
          <View style={styles.modalContainer}>
            <KeyboardAvoidingView behavior={'position'}>
              <View style={styles.modal}>
                <Text style={styles.text}>
                  What did you change on this version of the recipe?
                </Text>
                <TextInput
                  multiline
                  maxLength={maxAuthorComment}
                  placeholder="Notes"
                  onChangeText={(text) => setAuthor_comment(text)}
                  style={{
                    ...styles.textInput,
                    ...(highlighted && styles.highlighted),
                  }}
                />
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={closeModalHandler}
                    style={{
                      ...styles.cancelButton,
                      ...styles.narrowButton,
                    }}
                  >
                    <Text style={theme.SECONDARY_BUTTON_TEXT}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={saveModalHandler}
                    style={{
                      ...theme.PRIMARY_BUTTON,
                      ...styles.narrowButton,
                    }}
                  >
                    <Text style={theme.PRIMARY_BUTTON_TEXT}>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableHighlight>
      </Modal>
    </View>
  );
};

export default CommitModal;
