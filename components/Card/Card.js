import React , {useState} from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Status from "../Status/Status";

const Card = ({ data, ...props }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [edit, setEdit] = useState(false)
  const [visible, setVisible] = useState(false)
    const getInitialState = () => (edit ? {} : { disabled: 'disabled' })
    const editToggle = () => {
        setEdit(!edit)
    }
    const visibleToggle = () => {
      setVisible(!visible)
  }
  return (
    <View style={styles.card}>
      <View style={styles.cardRowSimple}>
        <Text style={styles.title}>#{data.id}</Text>
        <Status text={data.status} />
      </View>

      <View style={styles.hiddenData}>
        <View style={styles.twoInputsRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Start Date</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Start Date"
                />
              )}
              name="startDate"
              defaultValue={data.startDate  || ''}
            />
            {errors.firstName && <Text>This is required.</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>End Date</Text>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="End Date"
                />
              )}
              name="endDate"
              defaultValue={data.endDate || ''}
            />
          </View>
        </View>
        <View style={styles.twoInputsRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Start location</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Start location"
                />
              )}
              name="startLocation"
              defaultValue={data.startLocation || ''}
            />
            {errors.firstName && <Text>This is required.</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>End location</Text>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="End Location"
                />
              )}
              name="endLocation"
              defaultValue={data.endLocation || ''}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Boat Name</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Boat Name"
              />
            )}
            name="boatName"
            defaultValue={data.boat.name || ''}
          />
        </View>
        <View style={styles.twoInputsRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Flag</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Flag"
                />
              )}
              name="flag"
              defaultValue={data.boat.flag || ''}
            />
            {errors.firstName && <Text>This is required.</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>C.S</Text>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="C.S."
                />
              )}
              name="cs"
              defaultValue={data.boat.cs || ''}
            />
          </View>
        </View>
        <View style={styles.twoInputsRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Imo</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Imo"
                />
              )}
              name="imo"
              defaultValue={data.boat.imo || ''}
            />
            {errors.firstName && <Text>This is required.</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>LOA</Text>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Loa"
                />
              )}
              name="loa"
              defaultValue={data.boat.loa || ''}
            />
          </View>
        </View>
        <View style={styles.twoInputsRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Breadth</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Breadth"
                />
              )}
              name="breadth"
              defaultValue={data.boat.breadth || ''}
            />
            {errors.firstName && <Text>This is required.</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Depth</Text>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Depth"
                />
              )}
              name="depth"
              defaultValue={data.boat.depth}
            />
          </View>
        </View>
        <View style={styles.twoInputsRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>CF</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="CF"
                />
              )}
              name="cf"
              defaultValue={data.boat.cf || ''}
            />
            {errors.firstName && <Text>This is required.</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>SDRF</Text>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="SDRF"
                />
              )}
              name="SDRF"
              defaultValue={data.boat.sdrt || ''}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Agency Name</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Agency"
              />
            )}
            name="agency"
            defaultValue={data.agency || ''}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Channel</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Channel"
              />
            )}
            name="channel"
            defaultValue={data.channel || ''}
          />
        </View>
      </View>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  cardsContainerRow: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  cardRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardRowSimple:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12
  },
  card: {
    display: "flex",
    flexDirection: "column",
    elevation: 1,
    shadowOffset: { widht: 2, height: 2 },
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 1,
    backgroundColor: "#ffffff",
    borderWidth: 0,
    borderStyle: "solid",
    marginVertical: 5,
    height: "auto",
    borderRadius: 8,
    padding: 12,
    margin: 0,
    width: "100%",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 16,
    fontWeight: "500",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    flex: 1,
  },
  twoInputsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1,
  },
});
