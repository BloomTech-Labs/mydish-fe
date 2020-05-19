import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  AsyncStorage,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRecipe,
  resetRecipe,
  stopEditMode,
  startEditMode,
  submitEditedRecipe,
  fetchVersionByRevisionId,
  resetAlerts,
} from '../store/singleRecipe/singleRecipeActions';
import { updateRecipe, deleteRecipe } from '../store/recipes/recipeActions';
import {
  fetchAllVersionHistory,
  resetAllVersionHistory,
} from '../store/version-control/versionControlActions';
import {
  updateCookbookRecipe,
  deleteCookbookRecipe,
} from '../store/cookbook/cookbookAction';
import styles from '../styles/individualRecipeStyles.js';
import theme from '../styles/theme.style';
import { savedPlaceholder } from '../constants/imagePlaceholders';
import { maxUsername } from '../constants/maxLength';
import { logoHeaderPlain } from './header/navigationHeader';
import Tab from './Tab';
import CreateRecipeForm from './CreateRecipeForm';
import VersionHistoryList from './VersionHistoryList';
import DisplayRecipeIngredient from './DisplayRecipeComponents/DisplayRecipeIngredient';
import DisplayRecipeInstruction from './DisplayRecipeComponents/DisplayRecipeInstruction';
import DisplayRecipeNotes from './DisplayRecipeComponents/DisplayRecipeNotes';
import DisplayTitle from './DisplayRecipeComponents/DisplayTitle';
import FancySpinner from './FancySpinner';
import axiosWithAuth from '../utils/axiosWithAuth';
import { serverErrorAlert } from '../utils/helperFunctions/serverErrorAlert';
import { addCookbookRecipe } from '../store/cookbook/cookbookAction';

function IndividualRecipe(props) {
  const dispatch = useDispatch();
  const [color, setColor] = useState({ active: 'Ingredients' });
  const [userId, setUserId] = useState(null);
  const [commitModal, setCommitModal] = useState({
    save: false,
    cancel: false,
  });
  const [tempRecipe, setTempRecipe] = useState(null);
  const [versionListVisible, setVersionListVisible] = useState(false);

  const [Loading, setLoading] = useState(false);

  const recipe = useSelector((state) => state.singleRecipe.recipe);
  const isLoading = useSelector((state) => state.singleRecipe.isLoading);
  const successAlert = useSelector((state) => state.singleRecipe.successAlert);
  const versionsList = useSelector((state) => state.versionsList.versionsList);
  const editMode = useSelector((state) => state.singleRecipe.editMode);

  const [id, setId] = useState(
    props.navigation.getParam('recipeID', 'params not passed')
  );

  //Anytime someone navigations to here - it has ID, we could just also pass another value
  const revisionId = props.navigation.getParam(
    'revisionID',
    'revisionId not passed'
  );

  const loadRecipe = async () => {
    try {
      if (Number(revisionId))
        dispatch(fetchVersionByRevisionId(id, revisionId));
      else {
        dispatch(fetchRecipe(id));
      }
    } catch (error) {
      throw new Error('This is an error');
    }
  };

  useEffect(() => {
    loadRecipe();
    fetchUserId();
    dispatch(fetchAllVersionHistory(id));
    //below is a cleanup that resets the initState of singleRecipe to null values,
    //and resets the versionHistory state to an empty array,
    //which is important for a smooth user experience
    return () => {
      dispatch(resetRecipe());
      dispatch(resetAllVersionHistory());
    };
  }, [id, revisionId]);

  useEffect(() => {
    const didBlurSubscription = props.navigation.addListener('didBlur', () => {
      setColor({ active: 'Ingredients' });
    });
    return () => {
      didBlurSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (successAlert) {
      dispatch(resetAlerts());
      Alert.alert(
        '',
        'Recipe saved successfully!',
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: false }
      );
    }
  }, [successAlert]);

  async function fetchUserId() {
    try {
      const fetchId = await AsyncStorage.getItem('userID');
      setUserId(Number(fetchId));
    } catch (err) {
      console.log(err);
    }
  }

  const tabsDisplay = (cat) => {
    const newActive = cat;
    setColor({ active: newActive });
  };

  const startEditModeButton = () => {
    if (!recipe.owner.user_id || userId !== recipe.owner.user_id)
      return dispatch(stopEditMode());
    dispatch(startEditMode());
    setTempRecipe(recipe);
  };

  const saveButtonEditedRecipe = (author_comment) => {
    dispatch(submitEditedRecipe(author_comment));
    dispatch(stopEditMode());
    dispatch(updateCookbookRecipe(recipe));
    dispatch(updateRecipe(recipe));
    setCommitModal({ save: false, cancel: false });
  };

  const cancelButtonEditedRecipe = () => {
    Alert.alert(
      'Abandon editing session',
      'Are you sure you want to exit without saving your changes?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            dispatch(stopEditMode());
            dispatch(resetRecipe(tempRecipe));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const deleteRecipeHandler = () => {
    try {
      Alert.alert(
        'Are you sure you want to delete this recipe?',
        'This will delete all versions of this recipe.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => {
              dispatch(deleteRecipe(recipe.id));
              dispatch(deleteCookbookRecipe(recipe.id));
              dispatch(resetRecipe());
              props.navigation.pop();
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      throw new Error('This is an error');
    }
  };

  const postRecipe = async (recipe) => {
    setLoading(true);
    try {
      const axiosCustom = await axiosWithAuth();
      const res = await axiosCustom.post('recipes', recipe);
      setLoading(false);
      dispatch(addCookbookRecipe(res.data)); // adds recipe to user cookbook
      setId(res.data.id);
    } catch (err) {
      console.log('error from copying this recipe \n', err);
      if (err) {
        serverErrorAlert();
      }
    } finally {
      setLoading(false);
    }
  };

  const copyRecipeHandler = (copiedRecipe) => {
    const newRecipe = {
      title: copiedRecipe.title,
      img: copiedRecipe.img,
      prep_time: copiedRecipe.prep_time,
      cook_time: copiedRecipe.cook_time,
      tags: copiedRecipe.tags.map((tag) => {
        return tag.name;
      }),
      ingredients: copiedRecipe.ingredients.map((ingredient) => {
        return {
          name: ingredient.name,
          quantity: ingredient.quantity,
          units: ingredient.units,
        };
      }),
      instructions: copiedRecipe.instructions.map((instruction) => {
        return {
          description: instruction.description,
          step_number: instruction.step_number,
        };
      }),
      author_comment: copiedRecipe.author_comment,
      notes: copiedRecipe.notes.map((note) => {
        return { description: note.description };
      }),
      forked_from: copiedRecipe.owner,
    };
    postRecipe(newRecipe);
  };

  const hasTimeValue = (time) => {
    return time !== null && time !== 0 && time !== '';
  };

  if (isLoading || Loading) return <FancySpinner />;

  const editableRecipeDisplay = () => (
    <CreateRecipeForm
      navigation={props.navigation}
      savedRecipe={true}
      cancelButtonEditedRecipe={cancelButtonEditedRecipe}
      saveButtonEditedRecipe={saveButtonEditedRecipe}
    />
  );

  const nonEditableRecipeDisplay = () => {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.recipeContainer}>
            <ImageBackground
              source={recipe.img ? { uri: recipe.img } : savedPlaceholder}
              style={styles.image}
            />
            <View style={styles.recipeContentContainer}>
              <DisplayTitle title={recipe.title} />
              <View style={styles.underTitleRow}>
                <TouchableOpacity
                  onPress={() => {
                    userId === recipe.owner.user_id
                      ? props.navigation.push('MyProfile')
                      : props.navigation.push('OtherProfile');
                  }}
                >
                  <Text style={styles.authorName}>
                    {recipe.owner.username &&
                    recipe.owner.username.length > maxUsername
                      ? `By ${recipe.owner.username.slice(0, maxUsername)}...`
                      : `By ${recipe.owner.username}`}
                  </Text>
                </TouchableOpacity>
                {recipe.owner.user_id &&
                  !versionListVisible &&
                  userId === recipe.owner.user_id && (
                    <TouchableOpacity
                      onPress={startEditModeButton}
                      style={styles.editButton}
                    >
                      <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>
                  )}
                {recipe.owner.user_id &&
                  !versionListVisible &&
                  userId !== recipe.owner.user_id && (
                    <TouchableOpacity
                      onPress={() => copyRecipeHandler(recipe)}
                      style={{ ...styles.editButton, width: 175 }}
                    >
                      <Text style={styles.editText}>Copy to my Cookbook</Text>
                    </TouchableOpacity>
                  )}
              </View>
              {versionListVisible ? (
                <VersionHistoryList
                  id={id}
                  setVersionListVisible={setVersionListVisible}
                  navigation={props.navigation}
                />
              ) : (
                <View>
                  <View
                    style={{
                      ...styles.underTitleRow,
                      ...styles.tagAndVersionsRow,
                    }}
                  >
                    <View style={styles.tagBox}>
                      {recipe.tags &&
                        recipe.tags.map((tag, index) => (
                          <Text key={tag.id} style={theme.REGULAR_FONT}>
                            {tag.name}
                            {index < recipe.tags.length - 1 && <Text>, </Text>}
                          </Text>
                        ))}
                    </View>
                    {versionsList.length > 0 && (
                      <View>
                        <TouchableOpacity
                          onPress={() => setVersionListVisible(true)}
                        >
                          <Text style={styles.versions}>Other Versions</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                  <View
                    style={{
                      ...styles.underTitleRow,
                      marginTop: 22,
                    }}
                  >
                    <View style={styles.timeContainer}>
                      {hasTimeValue(recipe.prep_time) && (
                        <Text
                          style={{
                            ...theme.REGULAR_FONT,
                            marginRight: 10,
                          }}
                        >
                          Prep: {recipe.prep_time} min.
                        </Text>
                      )}
                      {hasTimeValue(recipe.cook_time) && (
                        <Text style={theme.REGULAR_FONT}>
                          Cook: {recipe.cook_time} min.
                        </Text>
                      )}
                    </View>
                  </View>

                  <View style={styles.tabsContainer}>
                    <Tab
                      text="Ingredients"
                      color={color}
                      toggleTab={tabsDisplay}
                    />
                    <Tab text="Steps" color={color} toggleTab={tabsDisplay} />
                  </View>

                  <View style={styles.recipeDetails}>
                    {color.active === 'Ingredients' && (
                      <>
                        {recipe.ingredients &&
                          recipe.ingredients.map((ing, i) => (
                            <DisplayRecipeIngredient key={i} ingredient={ing} />
                          ))}
                      </>
                    )}
                    {color.active === 'Steps' && (
                      <>
                        {recipe.instructions &&
                          recipe.instructions.map((step, i) => (
                            <DisplayRecipeInstruction
                              key={step.step_number}
                              instruction={step}
                            />
                          ))}

                        {recipe.notes[0].id !== null && (
                          <Text style={styles.notes}>Notes</Text>
                        )}
                        {recipe.notes[0].id !== null && (
                          <View style={styles.redBorder} />
                        )}
                        {recipe.notes[0].id !== null &&
                          recipe.notes.map((note, i) => (
                            <DisplayRecipeNotes
                              key={i}
                              notes={note}
                              index={i}
                            />
                          ))}
                      </>
                    )}
                  </View>
                  {recipe.owner.user_id && userId === recipe.owner.user_id && (
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity
                        style={theme.SECONDARY_BUTTON}
                        onPress={deleteRecipeHandler}
                      >
                        <Text style={theme.SECONDARY_BUTTON_TEXT}>Delete</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={theme.PRIMARY_BUTTON}
                        onPress={startEditModeButton}
                      >
                        <Text style={theme.PRIMARY_BUTTON_TEXT}>Edit</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                  {recipe.owner.user_id &&
                    !versionListVisible &&
                    userId !== recipe.owner.user_id && (
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          onPress={() => copyRecipeHandler(recipe)}
                          style={{ ...styles.editButton, width: 175 }}
                        >
                          <Text style={styles.editText}>
                            Copy to my Cookbook
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };

  return editMode ? editableRecipeDisplay() : nonEditableRecipeDisplay();
}

IndividualRecipe.navigationOptions = logoHeaderPlain;

export default IndividualRecipe;
