/* eslint-disable no-unused-vars */
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { placeholderClassname, resetOutline } from '@/lib/classname'
import { cn } from '@/lib/utils'
import PropTypes from 'prop-types'
import React, { memo } from 'react'

const FormInput = memo(({ form, label, name, type='text', placeholder }) => {
    return (
        <FormField
            name={name}
            control={form.control}
            placeholder={placeholder}
            render={({ field }) =>
            (<FormItem>
                {label && <FormLabel>{label}</FormLabel>}
                <FormControl>
                    <Input placeholder={placeholder} 
                    {...field}
                     className={cn(resetOutline, placeholderClassname)} 
                     type={type} />
                </FormControl>
                <FormMessage />
            </FormItem>)}
        />
    )
})
FormInput.displayName = 'FormInput';
FormInput.propTypes = {
    form: PropTypes.shape({
        control: PropTypes.any,
    }).isRequired,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password']),
    placeholder: PropTypes.string
}

export default FormInput