<Button
    mode={mode}
    onPress={onPress}
    disabled={disabled}
    loading={loading}
    buttonColor={
        mode === 'contained'
            ? Colors.primary
            : undefined
    }
    textColor={
        mode === 'contained'
            ? Colors.white
            : Colors.primary
    }
    uppercase={false}
    style={[styles.button, style]}
    contentStyle={[styles.content, contentStyle]}
    {...props}
>
    {title}
</Button>