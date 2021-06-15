---
title: Android
publish-date: 2020-09-08 11:36 am
categories: x-apps
author: mariar@empathy.co
---

# Android

## Table of contents


* [Add Empathy dependency to your Gradle files](#empathy-gradle-files)
* [Empathy Client](#empathy-client)

  * [Initialize](#empathy-client-initialize)
  * [Dynamic configurations](#empathy-client-dynamic-configurations)
* [Empathy Components](#empathy-components)

  * [Configure your components](#empathy-components-configure)
  * [SearchBoxView](#empathy-components-searchbox)

    * [Layout](#empathy-components-layout)
    * [Listener](#empathy-components-listener)
    * [Configuration](#empathy-components-configuration)

## Step-by-step guide
**IMPORTANT -** Min Android supported is **5.0 (API 21)**

Integrating X into your app is a straightforward process that consists of three steps:

1. Add Empathy dependency to your *Gradle*
2. Start `EmpathyClient`
3. Add the Empathy components you want to use in your app

## 1. Add Empathy dependency to your Gradle files
***Empathy Nexus is not a high availability system so to avoid unexpected errors in your builds we recommend to have a mirror repository on your side.***

1. Add repository

   You will need to set up our secured repository to be able to download internal packages from the url : `https://nexus.empathybroker.com/repository/public`

   To handle repository connection credentials you could review [official gradle documentation](https://docs.gradle.org/current/userguide/declaring_repositories.html#sec:handling_credentials), all needed credentials ( `username and password` ) will be provided by Empathy.
2.  Add dependency

   And add the *Gradle* dependency (`artifactId` will be provided by Empathy with your customised X Apps version):

   *\- Groovy:*

   ```
   dependencies {
     ...
     implementation 'co.empathy.mobile:{artifactId}:1.0.0'
   }
   ```

   *\- Kotlin DSL:*

   ```
   dependencies {
     ...
     implementation("co.empathy.mobile:{artifactId}:1.0.0")
   }
   ```

## 2. Empathy Client
<h3 id="empathy-client-initialize">Initialize</h3>

The second step for integrating X Apps is setting up the `EmpathyClient` instance.

*\- Java:*

```
public class YourApp extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        EmpathyClient.INSTANCE.initialize(this);
        ...
    }
}
```

*\- Kotlin:*

```
open class YourApp : Application() {
    override fun onCreate() {
        super.onCreate()
        EmpathyClient.initialize(this)
        ...
    }
}
```

<h3 id="empathy-client-dynamic-configurations">Dynamic configurations</h3>

`EmpathyClient` initialization function could receive a configuration object.

*\- Java:*

```
public class YourApp extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        EmpathyClient.INSTANCE.initialize(this, new MyEmpathyConfiguration());
        ...
    }
}
```

*\- Kotlin:*

```
open class YourApp : Application() {
    override fun onCreate() {
        super.onCreate()
        EmpathyClient.initialize(this, MyEmpathyConfiguration)
        ...
    }
}
```

This configuration object extends `ClientConfiguration` class.

*\- Java:*

```
public class MyEmpathyConfiguration extends ClientConfiguration {

    @NotNull
    @Override
    public String getInstance() {
        return "<your-value-here>";
    }

    @NotNull
    @Override
    public String getEnvironment() {
        return "<your-value-here>";
    }

    @NotNull
    @Override
    public ConfigurationParameter getLang() {
        return new ConfigurationParameter("<your-key-here>", "<your-value-here>");
    }

    @Nullable
    @Override
    public ConfigurationParameter getCatalogue() {
        return new ConfigurationParameter("<your-key-here>", "<your-value-here>");
    }

    @Nullable
    @Override
    public ConfigurationParameter getStore() {
        return new ConfigurationParameter("<your-key-here>", "<your-value-here>");
    }

    @Nullable
    @Override
    public ConfigurationParameter getWarehouse() {
        return new ConfigurationParameter("<your-key-here>", "<your-value-here>");
    }

    @Nullable
    @Override
    public List<ConfigurationParameter> getExtra() {
        return Arrays.asList(
                new ConfigurationParameter(
                        "<your-extra-key-here>",
                        "<your-extra-value-here>"),
                new ConfigurationParameter(
                        "<your-extra-key-here>",
                        "<your-extra-value-here>"),
        );
    }
}
```

*\- Kotlin:*

```
object MyEmpathyConfiguration : ClientConfiguration() {
    override val instance: String = "<your-value-here>"
    override val environment: String = "<your-value-here>"
    override val lang = ConfigurationParameter("<your-key-here>", "<your-value-here>")
    override val catalog: ConfigurationParameter? = null
    override val store: ConfigurationParameter = ConfigurationParameter("<your-key-here>", "<your-value-here>") 
    override val warehouse: ConfigurationParameter? = null
    override val extra: List<ConfigurationParameter> =
        listOf(
            ConfigurationParameter("<your-key-here>", "<your-value-here>"),
            ConfigurationParameter("<your-key-here>", "<your-value-here>")
        )
}
```

This is the list of parameters that are currently supported:

| Parameter     | Type                           | Required | Default     | Description                                                                                                                                                                                                     |
| ------------- | ------------------------------ | -------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `instance`    | `string`                       | Yes      | `'eb-demo'` | Unique identifier of your Search API instance. It is provided by Empathy                                                                                                                                        |
| `environment` | `string`                       | Yes      | `''`        | Default value indicates production environment<br><br> Use `staging` for pre-production environment                                                                                                               |
| `lang`        | `ConfigurationParameter`       | `Yes`    | `'es'`      | Language to be used by X for internationalizing messages (i.e. language of the search interface).<br><br> If there are no translations for the specified language, the fallback language (`'es'`) will be used. |
| `catalogue`   | `ConfigurationParameter`       | No       | `null`      | Catalogue identifier used by X when querying the Search API.<br><br>Not applicable to all instances.                                                                                                            |
| `store`       | `ConfigurationParameter`       | No       | `null`      | Store identifier used by X when querying the Search API.<br><br>Not applicable to all instances.                                                                                                                |
| `warehouse`   | `ConfigurationParameter`       | No       | `null`      | Warehouse identifier used by X when querying the Search API.<br><br>Not applicable to all instances.                                                                                                            |
| `extra`       | `List<ConfigurationParameter>` | No       | `null`      | Add extra `ConfigurationParameter`.<br><br>Not applicable to all instances.                                                                                                                                     |

## 3. Empathy Components
<h3 id="empathy-components-configure">Configure your components</h3>

Every component has some attributes to configure itself. Take a look at the component you need to configure to see the complete list of attributes.

You can set the values in the *xml*, see lines 7 to 9 in the example:

```
<co.empathy.x.client.ui.view.SearchBoxView
    android:id="@+id/searchBox"
    style="@style/EmpathySearchBoxLight"
    android:layout_width="0dp"
    android:layout_height="wrap_content"
    android:layout_margin="8dp"
    app:hint="Empathy Hint"
    app:hintColor="@color/blue"
    app:textColor="@color/orange"
    app:layout_constraintEnd_toEndOf="parent"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintTop_toTopOf="parent" />
```

Or you can set the values in your code:

*\- Java:*

```
SearchBoxView searchBox = findViewById(R.id.searchBox);
...
searchBox.setHintText("Empathy Hint");
searchBox.setHintColor(ContextCompat.getColor(this,R.color.blue));
```

*\- Kotlin:*

```
val searchBox: SearchBoxView = findViewById(R.id.searchBox)
...
searchBox.hintText = "Empathy Hint"
searchBox.hintColor = ContextCompat.getColor(this,R.color.blue)
```

<h3 id="empathy-components-searchbox">SearchBoxView</h3>

<h5 id="empathy-components-layout">Layout</h5>

To get a `SearchBoxView` you need to include the element in your layout.

```
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <co.empathy.x.client.ui.view.SearchBoxView
        android:id="@+id/searchBox"
        style="@style/EmpathySearchBoxLight"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_margin="8dp"
        app:hint="Empathy Hint"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />











        
</androidx.constraintlayout.widget.ConstraintLayout>
```

<h5 id="empathy-components-listener">Listener</h5>

To get `SearchBoxView` actions callback. You need to implement `SearchBoxView.OnActionListener`

*\- Java:*

```
public class MainActivity extends AppCompatActivity implements SearchBoxView.OnActionListener {
...

  @Override
  public void onSearchStateChanged(boolean enabled) {
    ...
  }

  @Override
  public void onSearchConfirmed(@Nullable CharSequence text) {
    ...
  }

  @Override
  public void onButtonClicked(int buttonCode) {
    ...
  }
}
```

*\- Kotlin:*

```
class MainActivity : AppCompatActivity(), SearchBoxView.OnActionListener {
...

  override fun onSearchStateChanged(enabled: Boolean) {
     ...
  }
  
  override fun onSearchConfirmed(text: CharSequence?) {
     ...
  }
  
  override fun onButtonClicked(buttonCode: Int) {
     ...
  }
}
```

<br>

| Method                 | Parameter  | Type           | Description                                                                                                                                                                       |     |
| ---------------------- | ---------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| `onSearchStateChanged` | enabled    | `boolean`      | Invoked when Search Box View opened or closed.                                                                                                                                    |     |
| `onSearchConfirmed`    | text       | `CharSequence` | Invoked when search is confirmed, suggestion is selected  or search button is clicked on the soft keyboard.<br><br>Parameter `text` contains the query.                           |     |
| `onButtonClicked`      | buttonCode | `Int`          | Invoked when search, close search or clear search button clicked.<br><br>buttonCode possible values:<br><br> `SEARCH_BUTTON = 1`, `CLOSE_BUTTON = 2`, `CLEAR_SEARCH_BUTTON = 3` |     |

<h5 id="empathy-components-configuration">Configuration</h5>

This is the list of attributes that are currently supported:

| XML Parameter          | Method                         | Type     | Description                            |
| ---------------------- | ------------------------------ | -------- | -------------------------------------- |
| `searchBoxColor`       | `setSearchBoxColor (int)`      | `color`  | Set search box color                   |
| `hint`                 | `setHintText (CharSequence)`   | `string` | Set search box hint text               |
| `hintColor`            | `setHintColor(int)`            | `color`  | Set search box hint text color         |
| `textColor`            | `setTextColor(int)`            | `color`  | Set search box text color              |
| `highlightedTextColor` | `setHighlightedTextColor(int)` | `color`  | Set search box text high lighted color |

