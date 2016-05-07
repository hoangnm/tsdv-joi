import * as Joi from "joi";
import {allowTypes} from "../../core";
import {getAndUpdateSchema} from "../../core";
import {StringSchema} from "joi";

export function Lowercase() : PropertyDecorator {
    return function (target: Object, propertyKey: string | symbol) : void {
        allowTypes(target, propertyKey, [String]);

        getAndUpdateSchema(target, propertyKey, (schema : StringSchema) => {
            return schema.lowercase();
        });
    }
}