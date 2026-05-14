(function () {
    const categorySelect = document.getElementById("id_category");
    const categoryGroups = document.querySelectorAll("[data-category-field]");
    const furnitureDepthField = document.querySelector("[data-furniture-depth]");

    if (!categorySelect || categoryGroups.length === 0) {
        return;
    }

    function setControlsEnabled(container, isEnabled) {
        container.querySelectorAll("input, select, textarea").forEach((control) => {
            control.disabled = !isEnabled;

            if (!isEnabled) {
                control.value = "";
            }
        });
    }

    function updateCategoryFields() {
        const selectedCategory = categorySelect.value;

        categoryGroups.forEach((group) => {
            const isSelected = group.dataset.categoryField === selectedCategory;

            group.classList.toggle("is-visible", isSelected);
            setControlsEnabled(group, isSelected);
        });

        if (furnitureDepthField) {
            const isFurniture = selectedCategory === "Furniture";

            furnitureDepthField.classList.toggle("is-hidden", !isFurniture);
            setControlsEnabled(furnitureDepthField, isFurniture);
        }
    }

    categorySelect.addEventListener("change", updateCategoryFields);
    updateCategoryFields();
}());
