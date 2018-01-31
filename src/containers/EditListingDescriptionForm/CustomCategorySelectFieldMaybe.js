import React from 'react';
import { required } from '../../util/validators';
import { SelectField } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomCategorySelectFieldMaybe = props => {
  const { name, id, categories, intl } = props;
  const categoryLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.categoryLabel',
  });
  const categoryPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.categoryPlaceholder',
  });
  const categoryRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.categoryRequired',
    })
  );
  return categories ? (
    <SelectField
      className={css.category}
      name={name}
      id={id}
      label={categoryLabel}
      validate={categoryRequired}
    >
      <option value="">{categoryPlaceholder}</option>
      {categories.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </SelectField>
  ) : null;
};

export default CustomCategorySelectFieldMaybe;