<?php

namespace AppBundle\Util;

use Symfony\Component\Yaml\Yaml;

/**
 * This class is created to make your life easier working with parameters.yml file AND ONLY WITH THIS FILE!;
 * You can put primitive parameters logic here
 *
 * Class ParametersManager
 * @package AppBundle\Util
 */
class ParametersManager
{
    const PARAMETERS_FILE = __DIR__ . '/../../../app/config/parameters.yml';

    public static $parameters;

    /**
     * @param $parameterName
     * @return mixed
     * @throws \Exception
     */
    public static function getParameter($parameterName)
    {
        if (is_null(self::$parameters)) {
            self::$parameters = Yaml::parseFile(self::PARAMETERS_FILE)['parameters'];
        }

        if (!array_key_exists($parameterName, self::$parameters)) {
            throw new \Exception("Parameter doesn't exist");
        }

        return self::$parameters[$parameterName];
    }
}