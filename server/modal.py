from sklearn import (
    datasets,
    model_selection,
    linear_model
)

iris_dataset = (
    datasets.load_iris()
)
x, y = datasets.load_iris(return_X_y=True)
x_train, x_test, y_train, y_test = model_selection.train_test_split(
    x, y, test_size=0.1, random_state=42, stratify=y
)
modal = linear_model.LogisticRegression()
modal.fit(x_train,y_train)

