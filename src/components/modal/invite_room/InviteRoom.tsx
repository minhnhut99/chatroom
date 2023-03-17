import { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import { AuthContext } from "../../../context/AuthProvider";
import { debounce } from "lodash";
import { Form, Select, Spin, Avatar, Modal } from "antd";
import "./InviteRoom.css";
import { db } from "../../../firebase";
import {
  query,
  collection,
  where,
  orderBy,
  limit,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
const DebounceSelect = ({
  fetchOptions,
  debounceTimeout = 300,
  curMembers,
  ...props
}: any) => {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  console.log("options", options);
  console.log("fetching", fetching);
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: any) => {
      setOptions([]);
      setFetching(true);

      fetchOptions(value, curMembers).then((newOptions: any) => {
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, debounceTimeout);
  }, [debounceTimeout, fetchOptions, curMembers]);

  useEffect(() => {
    return () => {
      setOptions([]);
    };
  });
  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
    >
      {options.map((opt: any) => (
        <Select.Option key={opt.value} value={opt.value} title={opt.label}>
          <Avatar size="small" src={opt.photoURL}>
            {opt.photoURL ? "" : opt.label?.charAt(0)?.toUpperCase()}
          </Avatar>
          {` ${opt.label}`}
        </Select.Option>
      ))}
    </Select>
  );
};

async function fetchUserList(search: string, curMembers: any) {
  const q = query(
    collection(db, "users"),
    where("keywords", "array-contains", search?.toLowerCase()),
    orderBy("displayName"),
    limit(20)
  );
  console.log("QQQQ", q);
  const snapshot = await getDocs(q);

  return snapshot.docs
    .map((doc) => ({
      label: doc.data().displayName,
      value: doc.data().uid,
      photoURL: doc.data().photoURL,
    }))
    .filter((opt) => !curMembers.includes(opt.value));
}

const InviteRoom = () => {
  const {
    isInviteMember,
    setIsInviteMember,
    selectedRoom,
    selectedRoomId,
  }: any = useContext(AppContext);
  console.log("isInViteMemberROom", isInviteMember);
  const {
    user: { uid },
  }: any = useContext(AuthContext);
  const [value, setValue] = useState([]);
  const [form] = Form.useForm();
  const handleOk = async () => {
    form.resetFields();
    setValue([]);

    const roomRef = doc(collection(db, "rooms"), selectedRoomId);

    await updateDoc(roomRef, {
      members: arrayUnion(
        ...selectedRoom.members,
        ...value.map((val: any) => val.value)
      ),
    });
    setIsInviteMember(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setValue([]);
    setIsInviteMember(false);
  };
  console.log("Valuee", value);
  return (
    <div>
      <Modal
        title="Invite user"
        // open={isInViteMember}
        open={isInviteMember}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        <Form form={form} layout="vertical">
          <DebounceSelect
            mode="multiple"
            name="search-user"
            label="user name"
            value={value}
            placeholder="enter user name"
            fetchOptions={fetchUserList}
            onChange={(newValue: any) => setValue(newValue)}
            style={{ width: "100%" }}
            curMembers={selectedRoom.members}
          />
        </Form>
      </Modal>
    </div>
  );
};

export default InviteRoom;
