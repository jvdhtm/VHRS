import { comments_list, comments_create, comments_read, comments_update, comments_partial_update, comments_delete, } from "../api";
import { createContext, useState } from "react";
const initialState = {
    count: 0,
    logActions: [],
    results: [],
};
const defaultContextState = {
    count: 0,
    loading: false,
    logActions: [],
};
/* prettier-ignore */
const CommentsContext = createContext(defaultContextState);
export const CommentsProvider = ({ children, headers, }) => {
    /* prettier-ignore */
    const [CommentsDataList, setCommentsDataList] = useState(initialState);
    /* prettier-ignore */
    const [loading, setLoading] = useState(false);
    const commentsList = async (data) => {
        if (data) {
            setLoading(true);
            const result = await comments_list(data, headers);
            let prevStateResults = CommentsDataList.results;
            let logActions = CommentsDataList.logActions;
            logActions.push({ verb: "get", results: result.data.results });
            let found = false;
            let newCount = CommentsDataList.count + result.data.count;
            let newNext = result.data.next;
            let newPrevious = result.data.previous;
            let newComments = prevStateResults.map((el) => {
                const preEl = prevStateResults.filter((resultEl) => {
                    return el.id === resultEl.id;
                });
                if (preEl.length > 0) {
                    found = true;
                    return { ...el, ...preEl[0] };
                }
                else {
                    return el;
                }
            });
            if (!found) {
                newComments = prevStateResults.concat(result.data.results);
            }
            setCommentsDataList({
                count: newCount,
                next: newNext,
                previous: newPrevious,
                logActions: logActions,
                results: newComments,
            });
            setLoading(false);
        }
    };
    const commentsCreate = async (data) => {
        if (data) {
            setLoading(true);
            const result = await comments_create(data, headers);
            let prevStateResults = CommentsDataList.results;
            let logActions = CommentsDataList.logActions;
            //Create
            let newCount = CommentsDataList.count;
            logActions.push({ verb: "post", results: result.data });
            if (!Array.isArray(result.data)) {
                newCount = prevStateResults.push(result.data);
            }
            else {
                prevStateResults = prevStateResults.concat(result.data);
                newCount = prevStateResults.length;
            }
            setCommentsDataList({
                ...CommentsDataList,
                count: newCount,
                results: prevStateResults,
            });
            setLoading(false);
        }
    };
    const commentsRead = async (id) => {
        if (id) {
            setLoading(true);
            const result = await comments_read(id.toString(), headers);
            let prevStateResults = CommentsDataList.results;
            let logActions = CommentsDataList.logActions;
            logActions.push({ verb: "get", results: result.data });
            let found = false;
            let newComments = prevStateResults.map((el) => {
                if (el.id === result.data.id) {
                    found = true;
                    return { ...el, ...result.data };
                }
                else {
                    return el;
                }
            });
            if (!found) {
                newComments = prevStateResults.concat(result.data);
            }
            setCommentsDataList({
                ...CommentsDataList,
                results: newComments,
            });
            setLoading(false);
        }
    };
    const commentsUpdate = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await comments_update(id.toString(), data, headers);
            let prevStateResults = CommentsDataList.results;
            let logActions = CommentsDataList.logActions;
            //update
            logActions.push({ verb: "put", results: result.data });
            let newComments;
            if (!Array.isArray(result.data))
                newComments = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newComments = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setCommentsDataList({
                ...CommentsDataList,
                results: newComments,
            });
            setLoading(false);
        }
    };
    const commentsPartial = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await comments_partial_update(id.toString(), data, headers);
            let prevStateResults = CommentsDataList.results;
            let logActions = CommentsDataList.logActions;
            //update
            logActions.push({ verb: "patch", results: result.data });
            let newComments;
            if (!Array.isArray(result.data))
                newComments = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newComments = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setCommentsDataList({
                ...CommentsDataList,
                results: newComments,
            });
            setLoading(false);
        }
    };
    const commentsDelete = async (id) => {
        if (id) {
            setLoading(true);
            const result = await comments_delete(id.toString(), headers);
            let prevStateResults = CommentsDataList.results;
            let logActions = CommentsDataList.logActions;
            logActions.push({ verb: "delete", results: id });
            //delete
            const newComments = prevStateResults.filter((el) => el.id !== id);
            setCommentsDataList({
                ...CommentsDataList,
                results: newComments,
            });
            setLoading(false);
        }
    };
    return (<CommentsContext.Provider value={{
            count: CommentsDataList.count,
            next: CommentsDataList.next,
            previous: CommentsDataList.previous,
            logActions: CommentsDataList.logActions,
            loading: loading,
            commentsData: CommentsDataList.results,
            commentsListFuncProp: commentsList,
            commentsCreateFuncProp: commentsCreate,
            commentsReadFuncProp: commentsRead,
            commentsUpdateFuncProp: commentsUpdate,
            commentsPartialFuncProp: commentsPartial,
            commentsDeleteFuncProp: commentsDelete,
        }}>
      {children}
    </CommentsContext.Provider>);
};
//# sourceMappingURL=comments.jsx.map