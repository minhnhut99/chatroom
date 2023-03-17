import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
interface ConditionTypes {
  fieldName: string;
  operator: any;
  compareValue: string;
}
const useFirestore = (collectionName: string, condition: ConditionTypes) => {
  const [documents, setDocuments] = useState<any>([]);
  // condition
  // {
  //   fieldName: "name",
  //   operator: "===",
  //   compareValue: "value"
  // }
  useEffect(() => {
    if (!condition.compareValue || !condition.compareValue.length) {
      return;
    }
    if (condition) {
      let collectionRef = query(
        collection(db, collectionName),
        orderBy("createdAt"),
        where(condition.fieldName, condition.operator, condition.compareValue)
      );
      const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log("docccs", docs);
        setDocuments(docs);
      });
      return unsubscribe;
    }
  }, [collection, condition]);
  console.log("documents", documents);
  return documents;
};

export default useFirestore;
