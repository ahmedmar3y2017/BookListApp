import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import Container from "./components/Container/container";
import Header from "./components/Header/header";
import AddForm from "./components/AddForm/addForm";
import PostContainer from "./components/PostContainer/postContainer";
import BooksList from "./components/BooksList/booksList";
import BookInfo from "./components/BookInfo/bookInfo";
import { useEffect } from "react";
import { getBooks } from "./store/bookSlice";

function App() {
  const { isLoading, error, books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks({ name: "ahmed marey" }));
  }, [dispatch]);

  return (
    <>
      <Header error={error}></Header>

      <Container>
        <AddForm></AddForm>
        <PostContainer>
          <div className="flex gap-6 p-4">
            {/* Left: Book List */}
            <div className="w-2/3">
              <BooksList isLoading={isLoading} error={error} books={books} />
            </div>

            {/* Right: Book Details */}
            <div className="w-1/3">
              <BookInfo />
            </div>
          </div>{" "}
        </PostContainer>
      </Container>
    </>
  );
}

export default App;
